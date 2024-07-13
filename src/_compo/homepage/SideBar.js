import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MainSidebar from "./MainSidebar";
import Link from "next/link";
import { Search, SearchIcon, TagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchComponent from "./SearchComponent";

const getEnabledCategories = [
  { id: 1, name: "JavaScript", count: 123 },
  { id: 2, name: "React", count: 89 },
  { id: 3, name: "Node.js", count: 67 },
  { id: 4, name: "CSS", count: 54 },
  { id: 5, name: "Python", count: 41 },
];

export default function Sidebar() {
  return (
    <>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2">
              {getEnabledCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={"/tag/" + category.name}
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}
                  >
                    <span>{category.name}</span>
                    <span className="text-muted-foreground">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {getEnabledCategories.map((category) => (
                <Link
                  key={category.id}
                  href={"/tag/" + category.name}
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
        <SearchComponent />
        <MainSidebar />
      </div>
    </>
  );
}
