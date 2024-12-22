import { Card, CardHeader, CardContent } from "@/components/Card";

interface InfoCardProps {
    title: string;
    content: string;
}

export function InfoCard({ title, content }: InfoCardProps) {
    return (
        <Card variant="hover" className="h-full">
            <CardHeader>
                <h2 className="text-2xl font-semibold">{title}</h2>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{content}</p>
            </CardContent>
        </Card>
    );
}