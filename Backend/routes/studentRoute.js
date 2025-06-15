import express from 'express'
import { allStudents, deleteStudent, newStudent, updateStudent } from '../controllers/studenController.js'

const router = express.Router()


router.get('/students',allStudents)

router.post('/students',newStudent)

router.put('/:id',updateStudent)

router.delete('/:id',deleteStudent)

export default router;