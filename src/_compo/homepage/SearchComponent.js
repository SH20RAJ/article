import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchComponent() {
  return (
    <>
      <Card>
          <CardHeader>
            <CardTitle>Search</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex gap-2">
              <Input
                type="text"
                placeholder="Search articles..."
                className="flex-1"
              />
              <Button type="submit">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
    </>
  )
}
