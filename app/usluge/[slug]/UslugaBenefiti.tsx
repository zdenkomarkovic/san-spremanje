import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBroom, FaClock, FaStar, FaShieldAlt } from "react-icons/fa";

interface UslugaBenefitiProps {
  benefits: string[];
}

const icons = [FaBroom, FaClock, FaStar, FaShieldAlt];

export default function UslugaBenefiti({ benefits }: UslugaBenefitiProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 py-2 md:py-4">
      {benefits.map((benefit, index) => {
        const Icon = icons[index] || FaStar;
        return (
          <Card key={index} className="text-center">
            <CardHeader>
              <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>{benefit}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Profesionalna usluga prilagođena vašim potrebama</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
} 