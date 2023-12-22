function start(){
    with(document){
        let l1 = String(getElementById('left_1').value);
        let l2 = String(getElementById('left_2').value);
        let l3 = String(getElementById('left_3').value);
        let l4 = String(getElementById('left_4').value);
        let l5 = String(getElementById('left_5').value);
        let l6 = String(getElementById('left_6').value);
        let r1 = String(getElementById('right_1').value);
        let r2 = String(getElementById('right_2').value);
        let r3 = String(getElementById('right_3').value);
        let r4 = String(getElementById('right_4').value);
        let r5 = String(getElementById('right_5').value);

        let result=0;
        let quality;

        if(l1=='YEREVAN'){
            result+=1;
            getElementById('left_1').style.backgroundColor = 'green';
        }
        else{
            getElementById('left_1').style.backgroundColor = 'red';
        }
        if(l2=='WASHINGTON'){
            result+=1;
            getElementById('left_2').style.backgroundColor = 'green';
        }
        else{
            getElementById('left_2').style.backgroundColor = 'red';
        }
        if(l3=='PEKIN'){
            result+=1;
            getElementById('left_3').style.backgroundColor = 'green';
        }
        else{
            getElementById('left_3').style.backgroundColor = 'red';
        }
        if(l4=='LONDON'){
            result+=1;
            getElementById('left_4').style.backgroundColor = 'green';
        }
        else{
            getElementById('left_4').style.backgroundColor = 'red';
        }
        if(l5=='MADRID'){
            result+=1;
            getElementById('left_5').style.backgroundColor = 'green';
        }
        else{
            getElementById('left_5').style.backgroundColor = 'red';
        }
        if(l6=='MOSCOW'){
            result+=1;
            getElementById('left_6').style.backgroundColor = 'green';
        }
        else{
            getElementById('left_6').style.backgroundColor = 'red';
        }
        if(r1=='BERLIN'){
            result+=1;
            getElementById('right_1').style.backgroundColor = 'green';
        }
        else{
            getElementById('right_1').style.backgroundColor = 'red';
        }
        if(result<=3){
            quality='Anbavarar';
            getElementById('answer').style.backgroundColor = 'red';
            getElementById('quality').style.backgroundColor = 'red';
        }
        else if(result>3){
            quality='Bavarar';
            getElementById('answer').style.backgroundColor = 'green';
            getElementById('quality').style.backgroundColor = 'green';
        }
    }
}