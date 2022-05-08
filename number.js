const operation = {
    numberValue : function(){
        let number = 0.2468;
        let sol =[number]
        const solution = (number) => {
            for(let i = 0; i < 52; i++){
                number = 2*number**2 - 1;
                sol[i] = number;
            }   
        };
        solution(number)
        return sol
    },
    indexValue : function(){
        let number = 1; 
        let sol = [number];
        const solution = (number) => {
            for(let i = 1; i < 52; i++){
                number = number + 1;
                sol[i] = number;
            }; 
        }
        solution(number)  
        return sol
    },
};

export default operation;


/*const numberValue = () => {   
    let number = 0.2468;
    let sol =[number]
    const solution = (number) => {
        for(let i = 0; i < 10; i++){
            number = 2*number**2 - 1;
            sol[i] = number;
        }   
    };
    solution(number)
    return sol
}

const indexValue = () => {
    let number = 1; 
    sol = [number];
    const solution = (number) => {
        for(let i = 1; i < 60; i++){
            number = number + 1;
            sol[i] = number;
        }; 
    }
    solution(number)  
    return sol
}
*/