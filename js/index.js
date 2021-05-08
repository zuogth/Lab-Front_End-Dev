let listImg=[
    {
         id:1,
        name:'./images/food-res.jpg'
    },
    {
        id:2,
        name:'./images/avt-1.jpg'
    },
    {
        id:3,
        name:'./images/avt-2.jpg'
    }
]
$(document).ready(function(){
    $('#next').click(function(){
        let name;
        let index;
        let id=$('img#slick-food-img').attr("data-id");
        for(let i=0;i<listImg.length;i++){
            if(id==3){
                name=listImg[0].name;
                index=listImg[0].id;
            }
            else{
                if(listImg[i].id-1==id){
                    name=listImg[i].name;
                    index=listImg[i].id;
                    break;
                }
            } 
        }
        $('img#slick-food-img').attr('src',name);
        $('img#slick-food-img').attr('data-id',index);
    });
    $('#prev').click(function(){
        let name;
        let index;
        let id=$('img#slick-food-img').attr("data-id");
        for(let i=0;i<listImg.length;i++){
            if(id==1){
                name=listImg[2].name;
                index=listImg[2].id;
            }
            else{
                if(listImg[i].id+1==id){
                    name=listImg[i].name;
                    index=listImg[i].id;
                    break;
                }
            } 
        }
        $('img#slick-food-img').attr('src',name);
        $('img#slick-food-img').attr('data-id',index);
    });
})