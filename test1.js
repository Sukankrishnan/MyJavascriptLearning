function countWords(words)
{
    var obj={};
    for(let i=0; i<words.length; i++)
    {
        const num=words[i]
    
        if(!obj[num])
        {
            obj[num]=1
        }
        else{
            obj[num]++;
        }
    }
    return obj;
}
console.log(countWords(['apple','grape','apple','apple','banana']));