import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Advisor } from "@/lib/types";

interface AdvisorCardProps {
  advisor: Advisor;
}

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl">{advisor.title}</CardTitle>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(advisor.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({advisor.reviews} reviews)</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{advisor.address}</p>
        {advisor.phone && (
          <p className="text-sm font-medium">{advisor.phone}</p>
        )}
      </CardContent>
    </Card>
  );
}