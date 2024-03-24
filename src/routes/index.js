import { Router} from "express"
const router = Router()

router.get("/",(req,res)=>res.render('index', {title: 'este es el index'}))
router.get("/about",(req,res)=>res.render('about', {title: ' about'}))
router.get("/experience",(req,res)=>res.render('experience', {title: 'experience'}))
router.get("/projects",(req,res)=>res.render('projects', {title: 'projects'}))
router.get("/contact",(req,res)=>res.render('contact', {title: 'contact'}))

export default router