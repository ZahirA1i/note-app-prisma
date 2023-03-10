import { GetServerSideProps } from 'next'
import { prisma } from '../lib/prisma'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'


interface Notes{
  notes: {
    id: string
    title: string
    content: string
  }[]
}


interface FormData {
  title: string
  content: string
  id: string
}

export default function Home({notes}: Notes) {

  const[form, setForm] = useState<FormData>({title: '', content:'', id:''})
  const router = useRouter()

  const refreshData = () => {
    Router.replace(router.asPath)
  }

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create' ,{
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(() => {
        setForm({title: '', content: '', id:''})
        refreshData()
      }   
        )
    } catch (error) {
      console.log(404);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data)
    } catch (error) {
      console.log(404);
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2x1 mt-4"></h1>
      <form onSubmit={e  => {
        e.preventDefault()
        handleSubmit(form)
      }} className="w-auto min-w[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch">
        <input type="text"
            placeholder='Title'
            value={form.title}
            onChange={e => setForm({...form, title: e.target.value})}
            className="border-2 rounded border-gray=600 p-1"
        />

        <input
            placeholder='Content'
            value={form.content}
            onChange={e => setForm({...form, content: e.target.value})}
            className="border-2 rounded border-gray=600 p-1"
        />

      <button type="submit" className="bg-blue-500 text-white rounded p-1">Add+</button>

      </form>

      <div className="w-auto min-w-[100%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
      <ul>
        {notes.map(note => (
          <li key={note.id} className="border-b border-gray-600 p-2" >
            <div className="flex justify-between" >
              <div className="flex-1" >
                <h3 className="font-bold" >{note.title}</h3>
                <p>{note.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const notes = await prisma.note.findMany({
    select: {
      title: true,
      id:true,
      content: true
    }
  })

  return {
    props: {
      notes
    }
  }
}
