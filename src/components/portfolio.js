import React, { Component } from 'react';
import Lightbox from 'react-images';
// import items from '../data/projects';
import CATEGORY from '../data/categoryEnum';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: CATEGORY.ALL,
      lightboxIsOpen: false,
      currentImage: 0,
      imageSet: []
    };

    this.categoryButtons = this.categoryButtons.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.portfolioItem = this.portfolioItem.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrev = this.gotoPrev.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  openLightbox(imageSet, event) {
    event.preventDefault();
    this.setState({
      lightboxIsOpen: true,
      imageSet: imageSet
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrev() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  changeCategory(event) {
    console.log(event.target.id);
    this.setState({ selectedCategory: CATEGORY[event.target.id] });
  }

  categoryButtons() {
    return Object.keys(CATEGORY).map(cat => {
      const active = this.state.selectedCategory === CATEGORY[cat] ? 'btn btn-primary' : 'btn btn-default default-override';
      return (
        <div className='col-sm-5ths text-center' key={ CATEGORY[cat] }>
          <div
            className={ active }
            style={ style.categoryBtn }
            id={ cat }
            onClick={ this.changeCategory }>
            { CATEGORY[cat] }
          </div>
        </div>
      );
    });
  }

  portfolioItem(items, width, category) {
    const align = width < 1000 ? 'center' : 'left';
    let filteredItems;

    if(category === CATEGORY.ALL) {
      filteredItems = items.filter(item => item.active === true);
    } else {
      filteredItems = items.filter(item => item.category === category && item.active === true);
    }

    // Group items by twos
    let groupedItems = [];
    for (var i = 0; i < filteredItems.length; i += 2) {
      console.log(i);
      const itemOne = filteredItems[i];
      const itemTwo = i+1 < filteredItems.length ? filteredItems[i+1] : null;
      groupedItems.push([itemOne,itemTwo]);
    }
    console.log(filteredItems);
    console.log(groupedItems);

    return groupedItems.map((item,idx) => {
      // console.log(item);
      const rowItems = item.map(e => {
        console.log(e);
        if(e == null) return null;
        const { text, imageUrl, link, images } = e;

        const btnType = link === '' ?
        <a href='#' className='btn btn-primary' style={{ marginBottom: '20px' }} onClick={ e => this.openLightbox(images, e) }>View Images</a>
        :
        <a href={ link } className='btn btn-primary' style={{ marginBottom: '20px' }} target='_blank'>Visit Website</a>

        return (
          <div>
            <div className='col-md-12' style={{ marginBottom: '40px', textAlign: align}}>
              {/* description */}
              <div>
                <img src={ imageUrl } style={{ maxHeight:'100%', maxWidth:'100%', borderRadius: '15px', boxShadow:'9px 9px 19px -7px rgba(0,0,0,0.28)' }} />
                <h3 style={ style.projectTitle }>{ text.title }</h3>
                <div style={ style.projectTags }>{ text.tags }</div>
                <div style= {{ textAlign: 'center' }}>
                  { btnType }
                </div>
                <p style={ style.projectDescription }>{ text.description }</p>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div className='row' key={ idx } style={ style.sectionItem }>
            <div className='col-md-6' style={{ margin: '50px 0px 50px 0px' }}>
              {/* first item */}
              { rowItems[0] }
            </div>
            <div className='col-md-6' style={{ margin: '50px 0px 50px 0px' }}>
              {/* second item */}
              { rowItems[1] !== null ? rowItems[1] : '' }
            </div>
        </div>
      );
    });

    // return filteredItems.map((item,idx) => {
    //   const { text, imageUrl, link, images } = item;
    //
    //   const btnType = link === '' ?
    //   <a href='#' className='btn btn-primary' onClick={ e => this.openLightbox(images, e) }>View Images</a>
    //   :
    //   <a href={ link } className='btn btn-primary' target='_blank'>Visit Website</a>
    //
    //   return (
    //     <section style={ style.sectionItem } key={ idx }>
    //       <div className='row'>
    //         <div className='col-md-6' style={{ marginBottom: '40px', textAlign: align }}>
    //           <div>
    //             <h3 style={ style.projectTitle }>{ text.title }</h3>
    //             <span style={ style.projectTags }>{ text.tags }</span>
    //             <p style={ style.projectDescription }>{ text.description }</p>
    //             { btnType }
    //           </div>
    //         </div>
    //         <div className='col-md-6'>
    //           <img src={ imageUrl } style={{ maxHeight:'100%', maxWidth:'100%' }} />
    //         </div>
    //       </div>
    //     </section>
    //   )
    // });
  }

  render() {
    const { width, items } = this.props;
    const { selectedCategory } = this.state;

    return (
      <div id='work-wrapper'>
        <section className='work' style={ style.workSection }>
          <div className='container'>
            <div className='row'>
              {/* header here */}
              <div className='col-lg-8 col-lg-offset-2 text-center'>
                <p style={ style.heading }>My Work</p>
                <p style={ style.subHeading}>Select a category to view</p>
              </div>
            </div>
            <div className='row' style={{ borderBottom: '1px solid #d6e1e5', paddingBottom:'20px' }}>
              { this.categoryButtons() }
            </div>
            { this.portfolioItem(items, width, selectedCategory) }
          </div>
        </section>
        <Lightbox
          currentImage={ this.state.currentImage }
          images={ this.state.imageSet }
          isOpen={ this.state.lightboxIsOpen }
          onClickNext={ this.gotoNext }
          onClickPrev={ this.gotoPrev }
          onClose={ this.closeLightbox } />
      </div>
    );
  }
}

const style = {
  workSection: {
    background: '#EEE',
    fontFamily: 'Montserrat'
  },
  sectionItem: {
    borderBottom: '1px solid #d6e1e5'
  },
  projectTitle: {
    fontSize: '2.4em',
    fontWeight: '700',
    color: '#2A3A3F',
    letterSpacing: '-.05em',
    textAlign: 'center'
  },
  projectTags: {
    fontSize: '0.85em',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#b2c6cd',
    marginBottom: '15px',
    textAlign: 'center'
  },
  projectDescription: {
    marginTop: '15px',
    marginBottom: '28px',
    lineHeight: '1.6',
    fontSize: '1.4em',
    display: 'block',
    fontSize: '0.97em',
    fontWeight: '300'
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: '800',
    color: '#2A3A3F'
  },
  subHeading: {
    fontSize: '1.5em',
    fontWeight: '300',
    color: '#2A3A3F'
  },
  categoryBtn: {
    width: '80%',
    marginBottom: '10px'
  }
}
