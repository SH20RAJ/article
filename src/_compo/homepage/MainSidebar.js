import { MoveIcon, TrendingUp, icons } from 'lucide-react'
import React from 'react'
import { badgeVariants } from "@/components/ui/badge"
import Link from 'next/link'
import { makeSlug } from '@/lib/funs'


const tags = [{
  name: "Movies",
  bgColor: "#f44336"
},
{
  name: "Music",
  bgColor: "#E91E63"
},
{
  name: "Books",
  bgColor: "#9C27B0"
},
{
  name: "Tech",
  bgColor: "#673AB7"
},
{
  name: "Science",
  bgColor: "#3F51B5"
},
{
  name: "Politics",
  bgColor: "#2196F3"
},
{
  name: "Sports",
  bgColor: "#03A9F4"
},
{
  name: "Travel",
  bgColor: "#00BCD4"
},
{
  name: "Food",
  bgColor: "#009688"
},
{
  name: "Health",
  bgColor: "#4CAF50"
},
{
  name: "Fashion",
  bgColor: "#8BC34A"
},
{
  name: "Business",
  bgColor: "#CDDC39"
},
{
  name: "Entertainment",
  bgColor: "#FFEB3B"
},
{
  name: "Education",
  bgColor: "#FFC107"
},
{
  name: "Environment",
  bgColor: "#FF9800"
},
{
  name: "History",
  bgColor: "#FF5722"
},
{
  name: "Lifestyle",
  bgColor: "#795548"
},
{
  name: "Art",
  bgColor: "#9E9E9E"
},
{
  name: "Culture",
  bgColor: "#607D8B"
},
{
  name: "Design",
  bgColor: "#E91E63"
},
{
  name: "Photography",
  bgColor: "#673AB7"
},
{
  name: "Parenting",
  bgColor: "#3F51B5"
},
{
  name: "Gaming",
  bgColor: "#2196F3"
},
{
  name: "Comics",
  bgColor: "#03A9F4"
},
{
  name: "Humor",
  bgColor: "#00BCD4"
},
{
  name: "Pets",
  bgColor: "#009688"
},
{
  name: "Relationships",
  bgColor: "#4CAF50"
},
{
  name: "Self",
  bgColor: "#8BC34A"
},
{
  name: "Spirituality",
  bgColor: "#CDDC39"
},
{
  name: "Writing",
  bgColor: "#FFEB3B"
},
{
  name: "Technology",
  bgColor: "#FFC107"
},
{
  name: "Programming",
  bgColor: "#FF9800"
},
{
  name: "Data Science",
  bgColor: "#FF5722"
},
{
  name: "Machine Learning",
  bgColor: "#795548"
},
{
  name: "Artificial Intelligence",
  bgColor: "#9E9E9E"
}
]

export default function MainSidebar() {
  return (
    <>
    <div>
      <h1 className='text-2xl font-bold'> <span className='flex gap-4'> <TrendingUp/> Trending</span></h1>

      

      <hr className=' my-4' />

      <div className='flex flex-wrap gap-2'>
        {tags.map((tag, index) => (
          <Link key={index} href={"/tags/"+makeSlug(tag.name)} className={badgeVariants({ variant: "outline" })+" shadow-sm"} style={{ color: tag.bgColor}}>{tag.name}</Link>
        ))}
      </div>

    </div>

    </>
  )
}
