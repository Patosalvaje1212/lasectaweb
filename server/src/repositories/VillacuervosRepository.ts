import {
  PublicRoleSchema,
  PublicJinxSchema,
  PublicPackSchema,
  PublicTranslationSchema,
  PublicPlaySchema,
  PublicPlayCreateSchema,
  PublicPlayUpdateSchema
} from '../types/villacuervos';

interface CacheEntry<T> {
  data: T;
  expiry: number;
}

export class VillacuervosRepository {
  private readonly baseUrl = 'https://villacuervos.es/api/public';
  private readonly cache = new Map<string, CacheEntry<any>>();
  private readonly cacheTTL = 24 * 60 * 60 * 1000; // 24 hours in ms

  private get apiToken(): string {
    return process.env.VILLACUERVOS_API_TOKEN || '';
  }

  private async getCachedOrFetch<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
    const cached = this.cache.get(key);
    const now = Date.now();
    if (cached && cached.expiry > now) {
      console.log(`[VillacuervosRepository] Cache HIT para: ${key}`);
      return cached.data;
    }
    console.log(`[VillacuervosRepository] Cache MISS para: ${key}. Consultando API externa.`);
    const data = await fetchFn();
    this.cache.set(key, {
      data,
      expiry: now + this.cacheTTL
    });
    return data;
  }

  async getRoles(): Promise<PublicRoleSchema[]> {
    return this.getCachedOrFetch('roles', async () => {
      const response = await fetch(`${this.baseUrl}/roles/`, {
        headers: { accept: 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch roles from Villacuervos: ${response.statusText}`);
      }
      return await response.json() as PublicRoleSchema[];
    });
  }

  async getRoleByKey(key: string): Promise<PublicRoleSchema> {
    return this.getCachedOrFetch(`role-${key}`, async () => {
      const response = await fetch(`${this.baseUrl}/roles/${encodeURIComponent(key)}/`, {
        headers: { accept: 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch role '${key}' from Villacuervos: ${response.statusText}`);
      }
      return await response.json() as PublicRoleSchema;
    });
  }

  async getJinxes(): Promise<PublicJinxSchema[]> {
    return this.getCachedOrFetch('jinxes', async () => {
      const response = await fetch(`${this.baseUrl}/jinxes/`, {
        headers: { accept: 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch jinxes from Villacuervos: ${response.statusText}`);
      }
      return await response.json() as PublicJinxSchema[];
    });
  }

  async getTranslationPacks(): Promise<PublicPackSchema[]> {
    return this.getCachedOrFetch('translation-packs', async () => {
      const response = await fetch(`${this.baseUrl}/translations/`, {
        headers: { accept: 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch translation packs from Villacuervos: ${response.statusText}`);
      }
      return await response.json() as PublicPackSchema[];
    });
  }

  async getTranslationsBySlug(
    slug: string,
    genre: string = 'male',
    markedGenres: boolean = true
  ): Promise<PublicTranslationSchema[]> {
    const cacheKey = `translations-${slug}-${genre}-${markedGenres}`;
    return this.getCachedOrFetch(cacheKey, async () => {
      const url = new URL(`${this.baseUrl}/translations/${encodeURIComponent(slug)}/`);
      url.searchParams.append('genre', genre);
      url.searchParams.append('marked_genres', markedGenres.toString());

      const response = await fetch(url.toString(), {
        headers: { accept: 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch translations for pack '${slug}' from Villacuervos: ${response.statusText}`);
      }
      return await response.json() as PublicTranslationSchema[];
    });
  }

  // --- Endpoints con Token de API ( plays ) ---

  async getPendingPlays(cultSlug: string): Promise<PublicPlaySchema[]> {
    if (!this.apiToken) {
      throw new Error('VILLACUERVOS_API_TOKEN no configurado en el servidor.');
    }
    const response = await fetch(`${this.baseUrl}/plays/cult/${encodeURIComponent(cultSlug)}/pending/`, {
      headers: {
        accept: 'application/json',
        'X-Api-Key': this.apiToken
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch pending plays for cult '${cultSlug}' from Villacuervos: ${response.statusText}`);
    }
    return await response.json() as PublicPlaySchema[];
  }

  async createPlay(cultSlug: string, playData: PublicPlayCreateSchema): Promise<PublicPlaySchema> {
    if (!this.apiToken) {
      throw new Error('VILLACUERVOS_API_TOKEN no configurado en el servidor.');
    }
    const response = await fetch(`${this.baseUrl}/plays/cult/${encodeURIComponent(cultSlug)}/`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Api-Key': this.apiToken
      },
      body: JSON.stringify(playData)
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to create play in Villacuervos: ${response.statusText}. Detalle: ${errText}`);
    }
    return await response.json() as PublicPlaySchema;
  }

  async updatePlay(playSlug: string, playData: PublicPlayUpdateSchema): Promise<PublicPlaySchema> {
    if (!this.apiToken) {
      throw new Error('VILLACUERVOS_API_TOKEN no configurado en el servidor.');
    }
    const response = await fetch(`${this.baseUrl}/plays/${encodeURIComponent(playSlug)}/`, {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Api-Key': this.apiToken
      },
      body: JSON.stringify(playData)
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to update play '${playSlug}' in Villacuervos: ${response.statusText}. Detalle: ${errText}`);
    }
    return await response.json() as PublicPlaySchema;
  }
}
