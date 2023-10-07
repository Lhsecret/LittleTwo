;(function(){
    var Lunbo = function(opt){
        
        this.isAnimation = opt.isAnimation;
        this.fn();
    }
    Lunbo.prototype = {
        fn: function(){
            var oLeft = document.getElementsByClassName('left')[0],
                oRight = document.getElementsByClassName('right')[0],
                content = document.getElementsByClassName('content')[0],
                circular = document.getElementsByClassName('group')[0],
                index = 0,
                lastCir = 0,
                children = elemChildren(circular);
            addEvent(oRight, 'click', function(){
                children[lastCir].classList.remove('on');
                if(index === 4){
                    content.style.transform = "translateX(0px)";
                    index = 0;
                    lastCir = 0;
                    children[index].classList.add('on');
                    return;
                }
                content.style.transform = `translateX(-${(index + 1) * 1000}px)`;
                ++ index ;
                children[index].classList.add('on');
                lastCir = index;
            })
            
            addEvent(oLeft, 'click', function(){
                children[lastCir].classList.remove('on');
                if(index === 0){
                    content.style.transform = `translateX(-4000px)`
                    index = 4;
                    lastCir = 4;
                    children[index].classList.add('on');
                    return;
                }
                content.style.transform = `translateX(-${(index - 1) * 1000}px)`;
                -- index;
                children[index].classList.add('on');
                lastCir = index;
            })


            for(let i = 0;i < children.length; i++){
                
                addEvent(children[i], 'click', function(){
                    children[lastCir].classList.remove('on');
                    content.style.transform = `translateX(-${i * 1000}px)`;
                    children[i].classList.add('on');
                    index = i;
                    lastCir = index;
                })
            }
            
        },
    }

    window.Lunbo = Lunbo;
})();