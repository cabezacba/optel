
const list_to_tree = (list) => {
   
    //declaro las variables locales
    var map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // Inicializo el map      
      list[i].children = []; // Inicializo el children      
    }
    //recorro todos los  menus
    for (i = 0; i < list.length; i += 1) {
      //tomo en menu que esta en lugar i
      node = list[i];
      
      // si el menu tiene padre
      if (node.parentID !== null) {
        // pongo el hijo dle menu en el padre       
        list[map[node.parentID.toString()]].children.push(node);

      } else {
        roots.push(node);
      }
    }
 
    return roots;
 };


 module.exports = { list_to_tree };