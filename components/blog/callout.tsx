import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger" | "note";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  const getIcon = () => {
    switch (type) {
      case "warning":
        return "⚠️";
      case "danger":
        return "🚨";
      case "note":
        return "💡";
      default:
        return "💡";
    }
  };

  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-red-900 bg-red-50": type === "danger",
        "border-orange-900 bg-orange-50": type === "warning",
        "border-green-900 bg-green-50": type === "note",
      })}
      {...props}
    >
      <span className="mr-4 text-2xl">{getIcon()}</span>
      <div>{children}</div>
    </div>
  );
}
