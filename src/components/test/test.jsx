import s from './test.module.css'


const Test = (props) => {

    return <div>
            <div>{props.todo.title}</div>
            <h1 className={s.test}>{props.todo.price}</h1>
    </div>
}


export default Test;