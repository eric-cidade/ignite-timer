import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles";
export function Home() {
    return (
       <HomeContainer>
            <form action="">
                <FormContainer>

                    <label htmlFor="task">I`ll work on</label>
                    <TaskInput id="task" list="task-suggestions" placeholder="Give a name to your project"/>

                    <datalist id="task-suggestions">
                        <option value="projeto 1"></option>
                        <option value="projeto 2"></option>
                        <option value="projeto 3"></option>
                        <option value="BANANA"></option>
                    </datalist>
                    <label htmlFor="minutesAmount">for</label>
                    <MinutesAmountInput 
                        type='number'  
                        id="minutesAmount" 
                        placeholder="00" 
                        step={5}
                        min={5}
                        max={60}/>

                    <span>minutes.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton disabled type="submit">
                    <Play size={24}/>
                    Start
                </StartCountDownButton>
            </form>
       </HomeContainer>
    );
}