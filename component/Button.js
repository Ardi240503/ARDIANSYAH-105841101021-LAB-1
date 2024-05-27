const ButtonComponent = ({backgroundColor,text})=>{
    return(
        <view style={{
            backgroundColor: backgroundColor,width: 150, height:70,
            borderRadius:10,
            marginLeft: 10
        }}>
            <text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight:70,
                fontSize:25,
                fontWeight:'bold',

            }}>
                {text}
            </text>
        </view>        
    )
}