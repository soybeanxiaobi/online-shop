let infoBox = [];
function put_in_infoBox(action){
    // console.log(action);
    //如果刚开始infoBox没有数据
    infoBox.push(action)
}

function addPro(state,action){
    // console.log(action);
    // console.log(action.type);
    if (!state) {
        return {
            pro_name: [],
            pro_price: [],
        }
    }
    switch(action.type){
        //如果有action动作,则更新infoBox
        case 'ADD': 
            //处理数据
            put_in_infoBox(action);
            console.log('infoBox-content')
            console.log(infoBox);
            return {
                pro_Info:infoBox

            }
        default:
            return state
    }


}

export default addPro