import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

interface PipelineCreateLinkProps
  extends VariantProps<typeof buttonVariants>,
    Omit<LinkProps, "href"> {
  className?: string;
}

export function PipelineCreateLink({
  className,
  variant,
  ...props
}: PipelineCreateLinkProps) {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ variant }), className)}
      href="/pipelines/new"
    >
      <Icons.add className="mr-2 h-4 w-4" />
      New pipeline
    </Link>
  );
}
