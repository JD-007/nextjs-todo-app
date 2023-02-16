import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import AddNewTodo from './add-new-todo'
import TodoList from './todo-list'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          ToDo App Build with NextJs 13&nbsp;
          <code className={styles.code}>@MalikJunaid</code>
        </p>
        <div>
        
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div>
        
       <h1> Todo App</h1> 
       <br/>

        <AddNewTodo />
            
            <br /> 

        <TodoList />


      </div>

     
    </main>
  );
}
