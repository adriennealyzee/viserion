module.exports = (rawPreferencesObj) => {
  var rawPreferences = JSON.stringify(rawPreferencesObj);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1, maximum-scale=1" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.css">
  <title>Spindle</title>
</head>
<body>
<script src="https://fb.me/react-15.0.0.js"></script>
<script src="https://fb.me/react-dom-15.0.0.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
<!--<script src="http://spindleapp.com:8080/socket.io/socket.io.js"></script>-->
<script src="http://127.0.0.1:8080/socket.io/socket.io.js"></script>
<!--<script src="http://ec2-54-203-8-222.us-west-2.compute.amazonaws.com:8080/socket.io/socket.io.js"></script>-->
<style type="text/css">
/*---------------
      #Header
  ---------------*/

.hero {
    background: #ffd5c9;
}

.hero.hero-wrapper{
    /*height: 80%;*/
    height: calc(100vh - 157px);
    display: flex;
    align-items: center;
    justify-content: center;
}

/*.content.hero2body {*/
/*top: 145vh;*/
/*}*/

.site-title {
    margin: 0 0 1em;
    padding: 1em 0;
    font-size: 2em;
    font-weight: 300;
    text-align: center;
    color: black;
}

@media screen and (min-width: 44.44em) {
    .site-title {
        font-size: 2em;
    }
}

@media screen and (min-width: 50em) {
    .site-title {
        font-size: 2.5em;
    }
}

.site-title a {
    color: hsl(5, 45%, 95%);
    text-decoration: none;
}

.site-title a:hover {
    text-decoration: underline;
}

/*---------------
    #Housekeeping
---------------*/
/* CSS Reset to correct browser inconsistencies */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/*---------------
    #Content
---------------*/

/* If viewport is 480px or larger */
@media screen and (min-width: 480px) {
    .content {
        width: 80%;
    }
}

/* Mobile */
.content {
    width: 90%;
    max-width: 1100px;
    margin: 50px auto 100px auto;
}

/*---------------
    #Image Caption
---------------*/

.image-content-wrapper {
    display: flex;
    align-items: flex-start; /* align vertical */
    justify-content: center; /* align horizontal */
    height: auto;
}

.image-content-inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}

.image-scalable {
    max-width: 100vw;
    max-height: 100vh;
}

.image-scalable-container {
    max-width: 100%;
}

.figcaption {
    text-align: left;
    margin: 10px;
}

/*---------------
  #Pinterest Content
---------------*/

.columns {
    column-gap: 10px;
}

.columns.columns-image {
    column-width: 280px;
}

div.columns figure {
    margin: 0 2px 15px;
    padding: 15px;
    padding-bottom: 10px;
    display: inline-block;
    column-break-inside: avoid;
}

div.columns.columns-image figure {
    background: #eee;
}

div.columns figure img {
    width: 100%;
    height: auto;
    padding-bottom: 15px;
    margin-bottom: 5px;
}

@media screen and (max-width: 750px) {
    .columns { column-gap: 0px; }
    .columns figure { width: 100%; }
}

/*---------------
  #Pinterest Text
---------------*/

/* If viewport is 480px or larger */
@media screen and (min-width: 480px) {
    .content.content-60 {
        width: 60%;
    }
}

.columns.columns-text {
    column-width: 280px;
}

/*---------------
    #Footer
---------------*/

.footer-area {
    padding: .4em 1em;
    text-align: center;
    background: hsl(0, 0%, 75%);
}

/*---------------
    #Layouts
---------------*/

.centered {
    margin: 0 auto;
    padding: 0 1em;
    text-align: center;
}

@media screen and (min-width: 52em) {
    .centered {
        max-width: 52em;
    }
}

/*---------------
    #Typography
---------------*/

body,
button,
input,
select,
textarea {
    color: #404040;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 18px;
    line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    clear: both;
    line-height: 1.3em;
    margin-bottom: 0.5em;
}

p {
    margin-bottom: 1.5em;
}

b,
strong {
    font-weight: bold;
}

dfn,
cite,
em,
i {
    font-style: italic;
}

blockquote {
    margin: 0 1.5em;
}

address {
    margin: 0 0 1.5em;
}

pre {
    background: #eee;
    font-family: "Courier 10 Pitch", Courier, monospace;
    font-size: 15px;
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1.6em;
}

code,
kbd,
tt,
var {
    font: 15px Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
}

abbr,
acronym {
    border-bottom: 1px dotted #666;
    cursor: help;
}

mark,
ins {
    background: #fff9c0;
    text-decoration: none;
}

sup,
sub {
    font-size: 75%;
    height: 0;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sup {
    bottom: 1ex;
}

sub {
    top: .5ex;
}

small {
    font-size: 75%;
}

big {
    font-size: 125%;
}

bigger {
    font-size: 350%;
    font-weight: bold;
    line-height: 1em;
}

.color-inverse {
    color: #fff;
}

</style>
<div id="parent"></div>

<script type="text/babel">
  //const socket = io('http://spindleapp.com:8080');
  const socket = io('http://127.0.0.1:8080');
  //const socket = io('http://ec2-54-203-8-222.us-west-2.compute.amazonaws.com:8080');
  var room;
  if (location) {
    //alert(location.href.split('/')[4])
    room = location.href.split('/')[4];
  }
  // ID generation
  let lastId = 0;
  function newId(prefix='id') {
    lastId++;
    return (prefix + lastId).toString();
  }
  class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rawPreferences: ${rawPreferences},
        sitePreferences: [{
          id: 'hero24',
          nickName: 'My Hero',
          componentName: <Hero1 />,
          attr: {
            bgColor: 'defaultColor',
            title: 'Title',
          },
        },
        {
            id: 'ticker2',
            nickName: 'My Ticker',
            componentName: <Ticker />,
            attr: {
              bgColor: 'defaultColor',
              title: 'Adrienne Tran, Matthew Go, Chet Malhi, Ed Sweezey',
            }
          }
          ,{
            id: 'footer12',
            nickName: 'My Footer',
            componentName: <Footer />,
            attr: {
              bgColor: 'defaultColor',
              text: 'Footer',
            }
          }],
      };

      this.map = this.map.bind(this);
      this.toComponents = this.toComponents.bind(this);
    }
    map(name) {
      const components = {
        Hero: {
          componentName: <Hero1 />,
        },
        GradientHero: {
          componentName: <GradientHero />
        },
        ImageContent: {
          componentName: <ImageContent />,
        },
        PinterestText: {
          componentName: <PinterestText />,
        },
        PinterestContent: {
          componentName: <PinterestContent />,
        },
        PricingListModal: {
          componentName: <PricingListModal />,
        },
        ImageCaption: {
          componentName: <ImageCaption/>,
        },
        TextContent: {
          componentName: <TextContent />,
        },
        List: {
          componentName: <List />,
        },
        Footer: {
          componentName: <Footer />,
        },
      };
      if (components[name]){
        return components[name].componentName;
      }
    }
    /*
     * toComponent(raw) takes in an object and converts the object to a React-friendly version
     * Input: obj of shape { componentName: 'TextContent', attr: {} }
     * Output: obj { component: <TextContent />, attr: {} }
     */
    toComponent(raw) {
      var res = {...raw};
      res.componentName = this.map(res.componentName);
      return res;
    }
    /* Input: Raw is an array of objects [{componentName: 'TextContent', attr: }]
     * Output: Converts component to array of objects {componentName: <TextContent />, attr: }
     */
    toComponents(raw) {
      var res = [];
      raw.forEach((comp) => {
        var newComp = this.toComponent(comp);
        res.push(newComp)
      });
      return res;
    }
    componentDidMount() {
      let newPref = this.toComponents(this.state.rawPreferences);
      this.setState({ sitePreferences: newPref})
    }
    componentWillMount() {
      // Web client listens to 'addPrefDomStore' event emitted when the user hits 'Submit'
      socket.on('addPrefDom', (addition) => {
        if (addition.room === room){
          let newPref = this.state.sitePreferences;
          newPref = [...newPref, this.toComponent(addition.newComponent)];
          this.setState({ sitePreferences: newPref });
        }
      });

      socket.on('updatePrefDom', (newPrefs) => {
        if (newPrefs.room === room){
          console.log('newPrefs.newPref', newPrefs.newPref)
          let newPrefsComp = this.toComponents(newPrefs.newPref);
          this.setState({ sitePreferences: newPrefsComp});
        }
      });
    }
    render() {
      return (
        <div>
          { this.state.sitePreferences.map((component, i) => {
            const child = component.componentName;
            const props = component.attr;
            const id = component.id;
            return React.cloneElement(child, Object.assign(props, { key: i, id }));
          }) }
        </div>
      )
    }
  }
  class Hero1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bgColor: this.props.bgColor,
        textColor: this.props.textColor,
        title: this.props.title,
        id: this.props.id,
        path1: ['attr', 'bgColor'],
        path2: ['attr', 'title'],
        path3: ['attr', 'textColor'],
      };
      this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        bgColor: nextProps.bgColor,
        title: nextProps.title,
        id: nextProps.id,
        textColor: nextProps.textColor,
      });
    }
    componentDidMount() {
//      socket.on('colorChange2', (bgColor) => {
//        this.setState({ bgColor })
//      })
    }
    handleHeaderClick() {
      // alert(room);
      socket.emit('colorChange', { room: room, id: this.state.id, path: this.state.path1 });
    }
    render() {
      console.log('header loaded')
      return (
        <div className="outer-wrap">
          <header
            className="hero header1"
            onClick={this.handleHeaderClick}
            style={{ backgroundColor: this.state.bgColor }}
          >
            <div className="centered">
              <span className="site-title">
                <EditableShortText
                  value={this.state.title}
                  id={this.state.id}
                  path={this.state.path2}
                  colorPath={this.state.path3}
                  color={this.state.textColor}
                />
              </span>
            </div>
          </header>
        </div>
      )
    }
  }
  class GradientHero extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mainTitle: this.props.mainTitle,
        subTitle: this.props.subTitle,
        color1: this.props.color.color1,
        color2: this.props.color.color2,
        id: this.props.id,
        pathGradient: ['attr', 'color'],
        path1: ['attr', 'mainTitle'],
        path2: ['attr', 'subTitle'], 
      }
      this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        mainTitle: nextProps.mainTitle,
        subTitle: nextProps.subTitle,
        color1: nextProps.color.color1,
        color2: nextProps.color.color2,
        id: nextProps.id,
      });
    }
    handleHeaderClick() {
      socket.emit('colorChange', { room: room, id: this.state.id, path: this.state.pathGradient, type: 'gradient' });
    }
    render() {
      return (
        <div className="outer-wrap">

          <header
            className="hero hero-wrapper"
            onClick={this.handleHeaderClick}
            style={{
              // background: this.state.color1,
              background: this.state.background1,
              background: '-webkit-linear-gradient(to left, ' + this.state.color2 +', ' + this.state.color1+')',
              background: 'linear-gradient(to left, ' + this.state.color2 + ', ' + this.state.color1 + ')',
            }}
          >
            <div className="row">
              <div className="box">
                <div className="centered color-inverse">
                  <bigger><EditableShortText value={this.state.mainTitle} id={this.state.id} path={this.state.path1}/></bigger>
                  {/*<h3><EditableShortText value={this.state.subTitle} id={this.state.id} path={this.state.path2}/></h3>*/}
                </div>
              </div>
            </div>
          </header>
        </div>
      )
    }
  }
  class ImageContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imageUrl: this.props.imageUrl,
        mainTitle: this.props.mainTitle,
        subtitle1: this.props.subtitle1,
        body1: this.props.body1,
        subtitle2: this.props.subtitle2,
        body2: this.props.body2,
        subtitle3: this.props.subtitle3,
        body3: this.props.body3,
        id: this.props.id,
      }
      this._path1 = ['attr', 'imageUrl'];
      this._path2 = ['attr', 'mainTitle'];
      this._path3 = ['attr', 'subtitle1'];
      this._path4 = ['attr', 'body1'];
      this._path5 = ['attr', 'subtitle2'];
      this._path6 = ['attr', 'body2'];
      this._path7 = ['attr', 'subtitle3'];
      this._path8 = ['attr', 'body3'];
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        imageUrl: nextProps.imageUrl,
        mainTitle: nextProps.mainTitle,
        subtitle1: nextProps.subtitle1,
        body1: nextProps.body1,
        subtitle2: nextProps.subtitle2,
        body2: nextProps.body2,
        subtitle3: nextProps.subtitle3,
        body3: nextProps.body3,
        id: nextProps.id,
      })
    }

    render() {
      return(
        <div className="content">
          <div className="row middle-md">
            <div className="col-xs-12 col-sm-7 col-md-5">
              <div className="box">
                <h1><EditableShortText value={this.state.mainTitle} id={this.state.id} path={this._path2}/></h1>
                <p>
                  <h3><EditableShortText value={this.state.subtitle1} id={this.state.id} path={this._path3}/></h3>
                  <EditableLongText body={this.state.body1} id={this.state.id} path={this._path4}/>
                </p>
                <p>
                  <h3><EditableShortText value={this.state.subtitle2} id={this.state.id} path={this._path5}/></h3>
                  <EditableLongText body={this.state.body2} id={this.state.id} path={this._path6}/>
                </p>
                <p>
                  <h3><EditableShortText value={this.state.subtitle3} id={this.state.id} path={this._path7}/></h3>
                  <EditableLongText body={this.state.body3} id={this.state.id} path={this._path8}/>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-sm-offset-1 col-md-6">
              <div className="box">
                <EditableImage src={this.state.imageUrl} id={this.state.id} path={this._path1}/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  class EditableLongText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        body: this.props.body,
        path: this.props.path,
        id: this.props.id,
        key: newId(),
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        body: nextProps.body,
        path: nextProps.path,
        id: nextProps.id,
      })
    }
    componentDidMount() {
//      socket.on('changeLongTextDom2', (data) => {
//        if (data.key === this.state.key) this.setState({ body: data.textValue })
//      })
    }
    handleClick(e) {
      e.stopPropagation();
      console.log('clicked');
//      socket.emit('launchLongTextModal', {key: this.state.key, textValue: this.state.body});
      socket.emit('launchLongTextModal', { room: room, key: this.state.key, textValue: this.state.body, id: this.state.id, path: this.state.path });
    }
    render() {
      return(
        <span onClick={this.handleClick}>{this.state.body}</span>
      )
    }
  }
  class EditableListText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: this.props.color,
        textValue: this.props.value,
        path: this.props.path,
        list: this.props.list,
        id: this.props.id,
        key: newId(),
        index: this.props.key
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        color: nextProps.color,
        textValue: nextProps.value,
        path: nextProps.path,
        list: nextProps.list,
        id: nextProps.id,
        index: nextProps.key,
      })
    }
    componentDidMount() {
//      socket.on('changeTitleDom2', (data) => {
//        if (data.key === this.state.key) this.setState({ textValue: data.textValue });
//      })
    }
    handleClick(e) {
      e.stopPropagation();
      socket.emit('launchListModal', { key: this.state.key, index: this.state.index, textValue: this.state.textValue, list: this.state.list, id: this.state.id, path: this.state.path });
    }
    render() {
      return(
        <span style={{color: this.state.color}} key={this.state.key} onClick={this.handleClick}>{this.state.textValue}</span>
      )
    }
  }
  class EditableShortText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: this.props.color,
        textValue: this.props.value,
        path: this.props.path,
        id: this.props.id,
        colorPath: this.props.colorPath,
        key: newId(),
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        color: nextProps.color,
        textValue: nextProps.value,
        path: nextProps.path,
        colorPath: nextProps.colorPath,
        id: nextProps.id,
      })
    }
    componentDidMount() {
//      socket.on('changeTitleDom2', (data) => {
//        if (data.key === this.state.key) this.setState({ textValue: data.textValue });
//      })
    }
    handleClick(e) {
      e.stopPropagation();
      console.log('short text clicked!')
      socket.emit('launchTitleModal', { room: room, key: this.state.key, textValue: this.state.textValue, id: this.state.id, path: this.state.path, color: this.state.color, colorPath: this.state.colorPath });
    }
    render() {
      return(
        <span style={{color: this.state.color}} key={this.state.key} onClick={this.handleClick}>{this.state.textValue}</span>
      )
    }
  }
  class List extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        bgColor: this.props.bgColor,
        items: this.props.items,
        id: this.props.id,
        path: ['attr', 'items'],
      }
      this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        id: nextProps.id,
        bgColor: nextProps.bgColor,
        items: nextProps.items,
      })
    }
    handleClick() {
      socket.emit('launchListModal', {key: this.state.key, id: this.state.id, path: this.state.path});
    }
    render() {
      const list = this.state.items.map((item, i) => {
        return (
          <p><EditableListText value={item} list={this.state.items} key={i} id={this.state.id} path={this.state.path}/></p>
        )
      });
      return (
        <div className="content">
          <div className="columns columns-image">
            {list}
          </div>
        </div>
      )
    }
  }
  class PinterestText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: this.props.content,
        id: this.props.id,
        path: ['attr', 'content'],
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        id: nextProps.id,
        content: nextProps.content,
      })
    }

    render() {
      const items = this.state.content.map((item, i) => {
        var path1 = [...this.state.path];
        var path2 = [...this.state.path];
        path1.push(i);
        path2.push(i);
        path1.push('title');
        path2.push('body');
        return (
          <figure key={i}>
            <h2><EditableShortText color={this.props.headerColor} value={item.title} id={this.state.id} path={path1}/></h2>
            <EditableLongText body={item.body} id={this.state.id} path={path2}/>
          </figure>
        )
      });
      return (
        <div className="content content-60">
          <div className="columns columns-text">
            {items}
          </div>
        </div>
      )
    }
  }
  class EditableImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        src: this.props.src,
        key: newId(),
        id: this.props.id,
        path: this.props.path,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        src: nextProps.src,
        id: nextProps.id,
        path: nextProps.path,
      })
    }

    componentDidMount() {
      // socket.on('changeImageDom2', (data) => {
      //   if (data.key === this.state.key) this.setState({ src: data.src });
      // });
    }
    handleClick() {
      socket.emit('launchImageModal', { room: room, key: this.state.key, id: this.state.id, path: this.state.path});
    }
    render() {
      return (
        <img className="image-scalable-container" key={this.state.key} onClick={this.handleClick} src={this.state.src} />
      )
    }
  }
  class PinterestContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imageUrls: this.props.imageUrls,
        id: this.props.id,
        path: ['attr', 'imageUrls'],
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        id: nextProps.id,
        imageUrls: nextProps.imageUrls,
      })
    }

    render() {
      const images = this.state.imageUrls.map((item, i) => {
        var imgpath = [...this.state.path]
        imgpath.push(i);
        return (
          <figure key={i}>
            <EditableImage src={item} id={this.state.id} path={imgpath}/>
          </figure>
        )
      });
      return (
        <div className="content">
          <div className="columns columns-image">
            {images}
          </div>
        </div>
      )
    }
  }
  class ImageCaption extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imageUrl: this.props.imageUrl,
        caption: this.props.caption,
        id: this.props.id,
        path1: ['attr', 'imageUrl'],
        path2: ['attr', 'caption'],
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        imageUrl: nextProps.imageUrl,
        caption: nextProps.caption,
        id: nextProps.id,
      })
    }

    render() {
      return (
        <div className="content">
          <div className="image-content-wrapper">
            <div className="image-content-inner-wrapper">
              <div className="figcaption">
                <EditableImage src={this.state.imageUrl} id={this.state.id} path={this.state.path1}/>
              </div>
              <i><EditableShortText value={this.state.caption} id={this.state.id} path={this.state.path2}/></i>
            </div>
          </div>
        </div>
      )
    }
  }
  class TextContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: this.props.title,
        body: this.props.body,
        id: this.props.id,
        path1: ['attr', 'title'],
        path2: ['attr', 'body'],
      }
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        title: nextProps.title,
        body: nextProps.body,
        id: nextProps.id,
      });
    }
    render() {
      return (
        <div className="content">
          <h1><EditableShortText value={this.state.title} id={this.state.id} path={this.state.path1} /></h1>
          <EditableLongText body={this.state.body} id={this.state.id} path={this.state.path2} />
        </div>
      )
    }
  }
  class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: this.props.text,
        bgColor: this.props.bgColor,
        path1: ['attr', 'text'],
        path2: ['attr', 'bgColor'],
        id: this.props.id,
      };
      this.handleFooterClick = this.handleFooterClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        text: nextProps.text,
        bgColor: nextProps.bgColor,
        id: nextProps.id,
      })
    }
//    componentDidMount() {
//      socket.on('colorChange2', (bgColor) => {
//        this.setState({ bgColor })
//      })
//    }
    handleFooterClick() {
      socket.emit('colorChange', { room: room, id: this.state.id, path: this.state.path2 });
    }
    render() {
      return (
        <footer
          className="footer-area"
          style={{ backgroundColor: this.state.bgColor }}
          onClick={this.handleFooterClick}
        >
          <p><EditableShortText value={this.state.text} id={this.state.id} path={this.state.path1}/></p>
        </footer>
      )
    }
  }

  class PricingListModal extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          borderColors: this.props.color,
          title: 'Items On Sale This Week',
          details: this.props.details,
          total: '$8.57',
          key: newId()
        };
        this.handleClick = this.handleClick.bind(this);
        this.styles = {
          parent: {
            maxWidth: '420px',
            border: 'solid 2px',
            borderColor: this.state.borderColors
          },
          title: {
            border: 'solid 2px',
            borderColor: this.state.borderColors,
            textAlign: 'center'
          },
          list: {
            textAlign: 'center',
            color: this.state.borderColors
          },
          total: {
            width: '80px',
            margin: '0 auto',
            border: 'solid 2px',
            textAlign: 'center',
            borderColor: this.state.borderColors
          }
        }
      }

      componentWillReceiveProps(nextProps) {
        this.setState({
          borderColors: nextProps.color,
          details: this.props.details,
        })
      }

      componentDidMount() {
        socket.on('updatePricingList2', (data) => {
          if (data.key === this.state.key) this.setState({ details: data.details});
        });
      }

      handleClick() {
        socket.emit('launchPricingModal', {key: this.state.key, details: this.state.details});
      }

      render() {
        var list = this.state.details.map( (item) => {
         return <div><EditableShortText value={item} color={this.styles.list.color} /></div>
        })
        return (
          <div className='Parent' style={this.styles.parent} onClick={this.handleClick} >
            <div id='title' style={this.styles.title}>
              <EditableShortText value={this.state.title} />
            </div>
            <div id='list' style={this.styles.list}>
              {list}
            </div>
            <div id='total' style={this.styles.total} ><EditableShortText value={this.state.total} /></div>
          </div>
        );
      }

    }

  class Ticker extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        msg: 'Adrienne Tran, Chet Malhi, Matthew Go, Ed Sweezey ',
        id: 'need to connect to prop',
        path: ['need to create componentMap.js connection'],
      }
      this.continue = true;
    }

    componentDidMount() {
      this.beginScroll(); 
    }

    rotateCharacters() {
      var msg = this.state.msg;
      msg = msg.split('');
      msg.push(msg.shift());
      msg = msg.join('');
      this.setState({msg: msg});
    }

    beginScroll(){
      if(this.continue && this.state.msg) {
        setInterval(this.rotateCharacters.bind(this),250)
      }
    }  

    render() {
      var msg = this.state.msg.slice(0,14);
      return (
        <div>
          <Hero1 title={msg} />
        </div>
      )
    }
  }   

  ReactDOM.render(<Parent/>, document.getElementById('parent'));
</script>
</body>
</html>`;
};
