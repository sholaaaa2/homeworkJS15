import React from 'react';
import './App.css';
import ListItems from '../list-element/list-element';
import FoneBlock from '../fone-block/fone-block';
import Section from '../section-block/section-block';
import StartBtn from '../start-btn/start-btn';
import CopySpan from '../copy-span/copy-span';

//Список навигационный
const data = [{name: "Home", linkAdress: "#"}, {name: "Photoapp", linkAdress: "#"}, {name: "Design", linkAdress: "#"},{name: "Download", linkAdress: "#"}]
//Текст в параграфах
const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit est, ullamcorper a vestibulum eu, pulvinar ut orci. Donec gravida orci non suscipit consequat. Suspendisse ut dui sed tortor ultrices tempus. Phasellus dictum lectus ex, ut placerat massa pharetra at. Nullam felis dolor, volutpat nec congue eget, ornare vitae quam. In finibus urna vel molestie tempus. Duis et convallis odio, convallis porta eros. Curabitur vel leo turpis. Morbi consequat ante in odio varius hendrerit.","Vestibulum varius pretium mattis. Aliquam vulputate maximus est, quis euismod elit sodales placerat. Proin pretium arcu a odio consectetur, nec vestibulum nisi venenatis. Nulla eleifend nisi vel pretium aliquam. Cras ornare elementum vehicula. Curabitur at hendrerit nisl. Donec ligula mauris, commodo non diam et, aliquam aliquet lectus. Maecenas volutpat, nisl in consectetur condimentum, ligula mauris fringilla mauris, eu aliquet mauris ligula at orci. Cras efficitur non massa in auctor. Sed posuere leo quam, sed varius massa euismod sit amet. Proin vehicula egestas massa. Nullam tempus massa a elementum posuere. Nam ac velit ac purus vestibulum fringilla. Nunc a tortor posuere, ultrices nisi id, interdum risus. Donec laoreet tempus libero ut viverra. Proin dapibus magna vel urna ornare, et pretium metus facilisis."]

function App() {
  return (
    <div className="App">
      <nav>
        <ListItems list={data} />
      </nav>

      <section>
        <FoneBlock />
        <Section head="Rappresent your life with a simple photo" text={text} />
        <StartBtn />
      </section>

      <footer>
        <CopySpan copyName="phototime"/>
      </footer>
    </div>
  )
}

export default App;
