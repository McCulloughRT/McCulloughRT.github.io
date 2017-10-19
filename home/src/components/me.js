import React, { Component } from 'react';

export default class Me extends Component {
  constructor(props) {
    super(props);

    this.bookList = this.bookList.bind(this);
    this.articleList = this.articleList.bind(this);
  }

  bookList(books) {
    if(books === undefined) return '';
    return books.map((book,i) => {
      const key = 'book_' + i;
      return (
        <li className='bookLi' style={ style.books } key={ key }>
          <a href={ book.link } target='_blank' className='bookTitle' style={ style.bookTitle }>{ book.title }</a>
          <br />
          <div className='bookBy' style={ style.by }>by <div className='bookAuthor' style={ style.author }>{ book.author }</div></div>
        </li>
      );
    });
  }

  articleList(articles) {
    if(articles === undefined) return '';
    return articles.map((article,i) => {
      const key = 'article_' + i;
      return (
        <li className='articleLi' style={{ fontWeight: '400', paddingBottom: '20px', fontStyle: 'italic' }} key={ key }>
          <a href={ article.link } target='_blank' className='articleTitle' style={ style.bookTitle }>{ article.title }</a>
          <br />
          <span className='articleAuthor' style={ style.author }>{ article.author || "Ryan McCullough" }</span>
        </li>
      );
    });
  }

  render() {
    const { books, articles, writing } = this.props.text;

    return (
      <section id='me' style={{ position: 'relative', background:'#F9F9F9', fontFamily: 'Montserrat' }}>
        <div className='container'>
          <div className='row' style={ style.headRow }>
            <div className='col-lg-8 col-lg-offset-2 text-center'>
              <p style={ style.heading }>About Me</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-lg-offset-2 text-center'>
              <img src='https://mcculloughrt.github.io/home/images/full/gXshvTwA_400x400.jpg' style={ style.profileImage }></img>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3 text-center'>
              <i className="fa fa-newspaper-o" style={ style.fa }></i>
              <h4 style={ style.title }>Recent Links</h4>
              <div style={{ textAlign: 'left' }}>
                <ul style={ style.ul }>
                  { this.articleList(articles) }
                </ul>
              </div>
            </div>
            <div className='col-md-3 text-center'>
              <i className="fa fa-pencil" style={ style.fa }></i>
              <h4 style={ style.title }>Writings</h4>
              <div style={{ textAlign: 'left' }}>
                <ul style={ style.ul }>
                  { this.articleList(writing) }
                </ul>
              </div>
            </div>
            <div className='col-md-3 text-center'>
              <i className="fa fa-bookmark-o" style={ style.fa }></i>
              <h4 style={ style.title }>Currently Reading</h4>
              <div style={{ textAlign: 'left' }}>
                <ul style={ style.ul }>
                  { this.bookList(books) }
                </ul>
              </div>
            </div>
            <div className='col-md-3 text-center'>
              <i className="fa fa-address-card-o" style={ style.fa }></i>
              <h4 style={ style.title }>Contact</h4>
              { socialLinks() }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function socialLinks() {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <a href='https://twitter.com/mcculloughrt' target='_blank' style={ style.socialLinks }>
          <i className='fa fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/in/mcculloughrt' target='_blank' style={ style.socialLinks }>
          <i className='fa fa-linkedin'></i>
        </a>
        <a href='https://github.com/McCulloughRT' target='_blank' style={ style.socialLinks }>
          <i className='fa fa-github'></i>
        </a>
        <br />
      </div>
      <span><a href="mailto:mcculloughrt@gmail.com" target="_top" style={{ color: 'rgb(45,120,140)' }}>mcculloughrt@gmail.com</a></span>
    </div>
  )
}

const style = {
  section: {
    position: 'relative',
    background: '#FFF',
    // padding: '70px',
    fontFamily: 'Montserrat'
  },
  ul: {
    listStyleType: 'circle'
  },
  books: {
    fontWeight: '400',
    paddingBottom: '30px'
  },
  bookTitle: {
    fontWeight: '500',
    letterSpacing: '0.25px',
    color: 'rgb(45,120,140)'
  },
  author: {
    fontSize: '1em',
    fontWeight: '300'
  },
  by: {
    fontSize: '0.98em'
  },
  fa: {
    fontSize: '3em',
    color: '#45BEAA'
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: '800',
    color: '#2A3A3F'
  },
  subHeading: {
    fontSize: '1.3em',
    fontWeight: '300',
    color: '#2A3A3F'
  },
  headRow: {
    marginBottom: '50px'
  },
  title: {
    fontSize: '1.5em',
    fontWeight: '700',
    color: '#2A3A3F',
    marginTop: '25px',
    marginBottom: '25px'
  },
  description: {
    fontSize: '0.97em',
    fontWeight: '300',
    color: '#aaa',
    textAlign: 'left',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  socialLinks: {
    height: '36px',
    width: '36px',
    background: 'rgba(0,0,0,0.15)',
    borderRadius: '50px',
    fontSize:'1.6rem',
    display: 'inline-block',
    lineHeight: '2.3',
    margin: '0 4px',
    color: 'rgba(255,255,255,1)'
  },
  profileImage: {
    borderRadius: '200px',
    width: '150px',
    marginTop: '-50px',
    marginBottom: '40px'
  }
}
