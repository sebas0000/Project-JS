$(function(){
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      auto: true,
    });
    let posts = [
        {
            title: 'Titulo articulo 1',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
        },{ 
            title: 'Titulo articulo 2',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
        },{
            title: 'Titulo articulo 3',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
        },{
            title: 'Titulo articulo 4',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
        },{
            title: 'Titulo articulo 5',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
        }]
        posts.forEach((element,index) =>{
            let post =`
            <article class="post">
                    <h2>${element.title}</h2>
                    <span class="date">${element.date}</span>
                    <p>
                        ${element.content}
                    </p>
                    <a href="#" class="button">Leer más</a>
                </article>
            `;
            $("#posts").append(post);
        })
})