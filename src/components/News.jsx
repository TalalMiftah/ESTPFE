import  {React,useState} from 'react'
import { Typography, Row, Col,Card,Avatar,Input } from 'antd'
import { useEffect } from 'react'

const News = ({ simplified }) => {
  const  [cryptoNews,setcryptoNews] = useState();
  const [cryptoN, setcryptoN] = useState(cryptoNews?.Data)
  const [searchTerm, setSearchTerm] = useState('')
      async function fetchData(){
        const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key={4b73109b800662283c6a16d23d897c1520f7f6a91ccb60a65f8136790f34f946}');
        const json = await response.json();
        setcryptoNews(json);
      };useEffect(fetchData,[]);
      useEffect(()=>{

        const filteredData = cryptoNews?.Data?.filter((coin)=>coin.title?.toLowerCase().includes(searchTerm.toLowerCase()));
        setcryptoN(filteredData); 
      }, [cryptoNews, searchTerm]);

      console.log(cryptoNews)
  if (!cryptoNews?.Data) return 'Loading...';
  return (
    <>
    {!simplified &&(
      <div className='search-crypto'>
      <Input placeholder='Search Coin News' onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )}
    <Row gutter={[32, 32]}>
      {cryptoN?.map((news, i) =>
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card' style={{borderRadius: "20px"}}>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Typography.Title className='news-title' level={3}>{news.title.slice(0,71)}...</Typography.Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.imageurl} alt="news" />
              </div>
              <p >
                {news.body}
              </p>
              <div className='provider-container'>
                <Avatar src={news?.source_info?.img} alt="" />
              </div>
            </a>
          </Card>
          <br/>
        </Col>
      )}
    </Row>
    </>
  )
}

export default News