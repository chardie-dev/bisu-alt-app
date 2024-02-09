import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

type ProfessionalExaminationCardType= {
  nameOfExamination: string,
  dateOfExamination: string,
  rating: string,
  onDeleteClickHandler: (e: React.FormEvent<HTMLElement>) => void
}

const ProfessionalExaminationCard: React.FC<ProfessionalExaminationCardType> = ({ nameOfExamination, dateOfExamination, rating, onDeleteClickHandler }) => {
  return (
    <div className='w-full'>
      <Card>
        <CardContent className='flex flex-row items-start mt-4'>
          <div>
            <p className='text-sm font-medium'>{nameOfExamination}</p>
            <p className='text-sm'>{dateOfExamination}</p>
            <p className='text-sm'>{rating}</p>
          </div>
          <Button className='ml-auto bg-error-300 hover:bg-error-700' onClick={onDeleteClickHandler} size='sm'>
            <Trash2/>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfessionalExaminationCard