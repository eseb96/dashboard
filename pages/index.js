import Link from 'next/link';
import fetch from'isomorphic-unfetch';
import {Button, Card, Container, Form} from 'semantic-ui-react';
import {useState} from 'react';

const Index = ({notes}) => {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className='notes-container'>
      <h1>Notes</h1>
      <div classNam='search'>
      <Form.Input label='Search' type='text'
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      />
      </div>
      <div className='grid wrapper'>
        {notes.filter((note) => {
          if (searchTerm == ''){
            return note
          } else if (note.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return note
          }
        })
      .map(note => {
        return (
          <div key={note._id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  <Link href={`${note._id}`}>
                  <a>{note.title}</a>
                  </Link>
                </Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Link href={`${note._id}`}>
                  <Button primary>View</Button>
                </Link>
                <Link href={`${note._id}/edit`}>
                  <Button primary>Edit</Button>
                </Link>
              </Card.Content>
            </Card>
            </div>
        );
      })}
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch(`http://localhost:3000/api/notes`);
  const { data} = await res.json();
  return { notes: data}
}

export default Index;