import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { blurDATA } from '@/lib/image';
import { ProductItemProps } from '@/types/product.types';
import Image from 'next/image';
import { Button } from '../ui/button';
import { SquareArrowOutUpRight } from 'lucide-react';

const PCard = ({
  id,
  title,
  description,
  amount,
  imageURL,
  status,
}: ProductItemProps) => (
  <Card>
    <CardHeader className="flex-row items-center justify-between">
      {status === 'success' ? (
        <CardTitle>{title}</CardTitle>
      ) : (
        <div className="h-8 w-4/12 animate-pulse rounded-md bg-slate-100" />
      )}

      <Button href={`/products/${id}`} size="smicon" variant="ghost">
        <SquareArrowOutUpRight size={16} strokeWidth={1.5} />
      </Button>
    </CardHeader>
    <CardContent className="grid grid-cols-1 gap-2.5">
      {status === 'success' ? (
        <div className="relative aspect-video w-full">
          <Image
            src={imageURL}
            alt={`product-item--image-${title}`}
            className="rounded-md"
            priority
            placeholder="blur"
            blurDataURL={blurDATA}
            fill
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full animate-pulse rounded-md bg-slate-100" />
      )}
      {status === 'success' ? (
        <p className="line-clamp-3 text-pretty font-medium text-gray-800">
          {description}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-1.5">
          <div className="h-6 w-full animate-pulse rounded-md bg-slate-100" />
          <div className="h-6 w-full animate-pulse rounded-md bg-slate-100" />
          <div className="h-6 w-8/12 animate-pulse rounded-md bg-slate-100" />
        </div>
      )}
    </CardContent>
    <CardFooter>
      {status === 'success' ? (
        <p className="text-pretty font-semibold text-gray-600">
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          }).format(amount)}
        </p>
      ) : (
        <div className="h-6 w-4/12 animate-pulse rounded-md bg-slate-100" />
      )}
    </CardFooter>
  </Card>
);

export default PCard;
