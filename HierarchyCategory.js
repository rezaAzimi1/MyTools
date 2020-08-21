
    var Category=[
                {id:"1",title:"root",parentid:null},
                {id:"2",title:"food",parentid:"1"},
                {id:"3",title:"car",parentid:"1"},             
                {id:"4",title:"apple",parentid:"2"},
                {id:"5",title:"orange",parentid:"2"},
                {id:"6",title:"fesh",parentid:"2"},
                {id:"7",title:"BMW",parentid:"3"},
                {id:"8",title:"GMC",parentid:"3"},  
    ]
    
    class HierarchyCategory{
        Category;
        Child;
    }
    function GetTree(id,num){
        var ArrayOfChild=new Array()
        var ChildTemp=Category.filter(element=>element.parentid==id)
        ChildTemp.forEach(element => {
            //console.log(num+":"+element.title)
            var node=new HierarchyCategory()
            node.Category=element
            node.Child=GetTree(element.id,num+1)
            ArrayOfChild.push(node)
        });
        return ArrayOfChild
    }
    console.log(GetTree(null,1))
