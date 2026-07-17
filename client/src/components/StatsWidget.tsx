import { useEffect, useState } from "react";
import type { PublicPlaySchema } from "./CalendarWidget";
import { Calendar, FileText, Users } from "lucide-react";

const API_URL = `${import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api'}`;

async function fetchPendingPlays(): Promise<PublicPlaySchema[]> {
  const response = await fetch(`${API_URL}/villacuervos/plays/pending`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

interface WidgetProps {
    miembros: number;
    escrituras: number;
    eventos: number;
}

function Widget({ miembros, escrituras, eventos }: WidgetProps) {
    const stats = [
        { label: 'Miembros', value: miembros, icon: Users },
        { label: 'Escrituras', value: escrituras, icon: FileText },
        { label: 'Eventos', value: eventos, icon: Calendar },
    ];

    return (
        <div className="flex flex-row flex-wrap gap-3">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="flex-1 min-w-[80px] bg-surface-low border border-outline-ghost p-3 rounded shadow-md flex items-center gap-3 hover:border-theme-main transition-colors group"
                >
                    <div className="text-theme-main bg-theme-container/20 p-2 rounded group-hover:scale-110 transition">
                        <stat.icon size={20} />
                    </div>
                    <div>
                        <div className="text-2xl font-display text-on-surface">{stat.value}</div>
                        <div className="text-sm text-on-surface-muted">{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function StatsWidget() {
    const [playsNm, setPlays] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    fetchPendingPlays()
        .then((data) => setPlays(data.length))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);


    if (loading) return <p>Loading calendar…</p>;
    if (error) return <p>Error: {error}</p>;

    return <Widget miembros={570} escrituras={13} eventos={playsNm} />;
}