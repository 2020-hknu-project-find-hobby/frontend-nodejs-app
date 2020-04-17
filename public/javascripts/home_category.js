/* 버튼 아이디에 따라 파라미터로 전달해 OPENAPI 구분 */
$(function(){
    $('#jam').click({param:"jam"}, kind);
    $('#dance').click({param:"dance"}, kind);
    $('#music').click({param:"music"}, kind);
    $('#book').click({param:"book"}, kind);
    $('#art').click({param:"art"}, kind);
    $('#flower').click({param:"flower"}, kind);
    $('#study').click({param:"study"}, kind);
    $('#cook').click({param:"cook"}, kind);
    $('#fashion').click({param:"fashion"}, kind);
})

/* 실제 OPEN API 출력! */
function kind(event)
{
    /* 레포츠 */
    if (event.data.param == "jam")
    {
        $.ajax({//사격장
            type: "GET",
            url: "https://openapi.gg.go.kr/PubPhysTrainFaciltyShootRange?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.PubPhysTrainFaciltyShootRange[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                    contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+'</li>';
                } 
                $("#output").html(contentStr);
            }
        })
        $.ajax({//수영장
            type: "GET",
            url: "https://openapi.gg.go.kr/PublicSwimmingPool?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.PublicSwimmingPool[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"</li>";
                } 
                $("#output").append(contentStr);
            }
        })
        $.ajax({//체육관
            type: "GET",
            url: "https://openapi.gg.go.kr/PublicLivelihood?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.PublicLivelihood[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[지역]"+list[i].SIGUN_NM+"</li>";
                } 
                $("#output").append(contentStr);
            }
        })
        $.ajax({//체육도장
            type: "GET",
            url: "https://openapi.gg.go.kr/PhysicalTraining?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.PhysicalTraining[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].BIZPLC_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].LOCPLC_FACLT_TELNO+"</li>";
                } 
                $("#output").append(contentStr);
            }
        })
        $.ajax({//낚시터
            type: "GET",
            url: "https://openapi.gg.go.kr/FISHPLCINFO?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.FISHPLCINFO[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                        contentStr += '<li class="list-group-item">[장소]'+list[i].FACLT_DIV_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].MANAGE_INST_TELNO+"</li>";
                } 
                $("#output").append(contentStr);
            }
        })
        $.ajax({//승마장
            type: "GET",
            url: "https://openapi.gg.go.kr/PublicHorseridingCenter?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.PublicHorseridingCenter[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[지역]"+list[i].SIGUN_NM+"<br></br>[연락처]"+list[i].CONTCT_NO+"</li>";
                } 
                $("#output").append(contentStr);
            }
        }) //등산로,산책로 추가 못함 >> 웹페이지가 못버팀
    }

    /* 춤 */
    if (event.data.param == "dance")
    {
        $.ajax({//댄스학원
            type: "GET",
            url: "https://openapi.gg.go.kr/DanceAcademy?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.DanceAcademy[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].BIZPLC_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].LOCPLC_FACLT_TELNO+"</li>";
                } 
                $("#output").html(contentStr);
            }
        })
            $.ajax({//연극
                type: "GET",
                //datatype: "json",
                url: "https://openapi.gg.go.kr/Tbinstutm?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=4&pSize=1000",
                success:function(data){
                    var text = JSON.parse(data);
                    var list = text.Tbinstutm[1].row;
                    var contentStr = "";
                    
                    for(var i=0; i<list.length; i++)
                    {
                        if(list[i].CRSE_CLASS_NM == "연극" || list[i].CRSE_CLASS_NM == "무용")
                        {
                            contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].TELNO+"</li>";
                        }
                    } 
                    $("#output").append(contentStr);
                }
            })
    }

    /* 음악 */
    if (event.data.param == "music")
    {
        $.ajax({//음악학원
            type: "GET",
            url: "https://openapi.gg.go.kr/Tbinstutm?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=1000",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.Tbinstutm[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                    if(list[i].CRSE_CLASS_NM == "음악")
                    {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].TELNO+"</li>";
                    }
                } 
                $("#output").append(contentStr);
            }
        })
        $.ajax({//노래방
            type: "GET",
            url: "https://openapi.gg.go.kr/sngrumIndutype?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.sngrumIndutype[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                    contentStr += '<li class="list-group-item">[이름]'+list[i].BIZPLC_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"</li>";
                } 
                $("#output").html(contentStr);
            }
        })
    }

    /* 교양 */
    if (event.data.param == "book")
    {
        $.ajax({//공연장
            type: "GET",
            url: "https://openapi.gg.go.kr/PerformPlace?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.PerformPlace[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                    contentStr += '<li class="list-group-item">[이름]'+list[i].BIZPLC_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].LOCPLC_FACLT_TELNO+"</li>";
                } 
                $("#output").html(contentStr);
            }
        })
        $.ajax({//영화관
            type: "GET",
            url: "https://openapi.gg.go.kr/MovieTheater?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=50",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.MovieTheater[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                    contentStr += '<li class="list-group-item">[이름]'+list[i].BIZPLC_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].LOCPLC_FACLT_TELNO+"</li>";
                } 
                $("#output").append(contentStr);
            }
        })
    }

    /* 미술 */
    if (event.data.param == "art")
    {
        $.ajax({
            type: "GET",
            url: "https://openapi.gg.go.kr/Tbinstutm?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=1000",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.Tbinstutm[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                    if(list[i].CRSE_CLASS_NM == "미술")
                    {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].TELNO+"</li>";
                    }
                } 
                $("#output").html(contentStr);
            }
        })
    }

    /* 공예 - url에서 최대 페이지 사이즈가 1000개가 한계라 임의로 페이지 인덱스 4로 설정 */
    if (event.data.param == "flower")
    {
        $.ajax({
            type: "GET",
            url: "https://openapi.gg.go.kr/Tbinstutm?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=4&pSize=1000",
            success:function(data){
                var text = JSON.parse(data);
                var list = text.Tbinstutm[1].row;
                var contentStr = "";
                
                for(var i=0; i<list.length; i++)
                {
                    if(list[i].CRSE_CLASS_NM == "DIY가구제작(중급)" || list[i].CRSE_CLASS_NM == "DIY가구제작(초급)" || list[i].CRSE_CLASS_NM == "DIY목공" || list[i].CRSE_CLASS_NM == "로봇" || list[i].CRSE_CLASS_NM == "섬유공예머신퀼트" || list[i].CRSE_CLASS_NM == "꽃꽂이")
                    {
                        contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].TELNO+"</li>";
                    }
                } 
                $("#output").html(contentStr);
            }
        })
    }

     /* 어학 */
     if (event.data.param == "study")
     {
         $.ajax({
             type: "GET",
             url: "https://openapi.gg.go.kr/Tbinstutm?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=4&pSize=1000",
             success:function(data){
                 var text = JSON.parse(data);
                 var list = text.Tbinstutm[1].row;
                 var contentStr = "";
                 
                 for(var i=0; i<list.length; i++)
                 {
                     if(list[i].CRSE_CLASS_NM == "실용외국어(유아/초·중·고)")
                     {
                         contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].TELNO+"</li>";
                     }
                 } 
                 $("#output").html(contentStr);
             }
         })
     }

     
     /* 요리 */
     if (event.data.param == "cook")
     {
         $.ajax({
             type: "GET",
             //datatype: "json",
             url: "https://openapi.gg.go.kr/Tbinstutm?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=1&pSize=1000",
             success:function(data){
                 var text = JSON.parse(data);
                 var list = text.Tbinstutm[1].row;
                 var contentStr = "";
                 
                 for(var i=0; i<list.length; i++)
                 {
                     if(list[i].CRSE_CLASS_NM == "식음료품(바리스타,소믈리에)" || list[i].CRSE_CLASS_NM == "식음료품")
                     {
                         contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].TELNO+"</li>";
                     }
                 } 
                 $("#output").html(contentStr);
             }
         })
     }

     
     /* 패션 */
     if (event.data.param == "fashion")
     {
         $.ajax({
             type: "GET",
             //datatype: "json",
             url: "https://openapi.gg.go.kr/Tbinstutm?KEY=f6cc1704c2f24255b5cf45d4949f1f84&Type=json&pIndex=4&pSize=1000",
             success:function(data){
                 var text = JSON.parse(data);
                 var list = text.Tbinstutm[1].row;
                 var contentStr = "";
                 
                 for(var i=0; i<list.length; i++)
                 {
                     if(list[i].CRSE_CLASS_NM == "이·미용" || list[i].CRSE_CLASS_NM == "애견미용")
                     {
                         contentStr += '<li class="list-group-item">[이름]'+list[i].FACLT_NM+"<br></br>[주소]"+list[i].REFINE_ROADNM_ADDR+"<br></br>[연락처]"+list[i].TELNO+"</li>";
                     }
                 } 
                 $("#output").html(contentStr);
             }
         })
     }
}