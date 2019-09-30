import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Table from 'react-bootstrap/Table'


const Index = props => (
  <Layout>
    
    <h1>Ads Finder : React Interface</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>URL</th>
          <th>Title</th>
          <th>Total Iframes</th>
          <th>Width</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
      {props.tasks.map(task => (
        <tr key={task.total_iframes}>
          <td> {task.url} </td>
          <td> {task.title} </td>
          <td> {task.total_iframes} </td>
          <td> {task.width} </td>
          <td> {task.height} </td>          
        </tr>
      ))}
      </tbody>
    </Table>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://35.192.8.4/url/www.investmentweek.co.uk');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    tasks: data.map(entry => entry)
  };
};

export default Index;