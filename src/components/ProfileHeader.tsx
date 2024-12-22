import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/Card";

export function ProfileHeader() {
    return (
        <Card variant="hover" tilt={true} className="px-12 mt-8">
            <CardContent className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-4">👋 Hello!</h1>
            <Avatar className="my-4 w-32 h-32">
                <AvatarImage src="/avatar.webp" draggable={false} />
                <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <div className="text-3xl flex items-center mt-4">
                <span>My name is</span>
                <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ml-2">
                Keiran
                </span>
            </div>
            </CardContent>
        </Card>
    );
}