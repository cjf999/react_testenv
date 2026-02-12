import {Hono} from "hono"

export const Testroute = new Hono()
.get("/", (c) => {
    return c.json({ someNumber: []});
})
.post("/", (c) => {
    return c.json({})
})

/**
const handleClick = async() => {
    }
 */


export default function Button(){
    return(
        <div>
            <Button ></Button>
        </div>
        
    )
}
