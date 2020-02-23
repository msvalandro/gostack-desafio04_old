import React, { Component } from 'react';

import './PostList.css';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Júlio Alcantara',
          avatar: 'https://i.pravatar.cc/150?img=60',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=11',
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza? \nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=16',
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=33',
            },
            content:
              'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=11',
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza? \nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=16',
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=33',
            },
            content:
              'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <ul className="post-list">
        {this.state.posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
