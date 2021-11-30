const doors = 
[
    {
        id: '1',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mo>&#x2200;</mo><mi>z</mi><mo>&#x2208;</mo><mi>&#x2102;</mi><mo>:</mo><mi>Re</mi><mo stretchy='false'>(</mo><mi>z</mi><mo stretchy='false'>)</mo><mo>,</mo><mi>Im</mi><mo stretchy='false'>(</mo><mi>z</mi><mo stretchy='false'>)</mo><mo>&#x2208;</mo><mi>&#x211D;</mi>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>z</mi><mo>=</mo><mo stretchy='false'>(</mo><mn>15</mn><mo>+</mo><mn>6</mn><mi>i</mi><mo stretchy='false'>)</mo><mo>&#x22C5;</mo><mo stretchy='false'>(</mo><mn>2</mn><mo>+</mo><mi>i</mi><mo stretchy='false'>)</mo>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>Re</mi><mo stretchy='false'>(</mo><mi>z</mi><mo stretchy='false'>)</mo><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>\n\
        ",
        correct_answer: '24'
    },
    {
        id: '2',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mstyle displaystyle='true'>\n\
             <munderover>\n\
              <mo>&#x2211;</mo>\n\
              <mrow>\n\
               <mi>i</mi><mo>=</mo><mn>1</mn></mrow>\n\
              <mn>10</mn>\n\
             </munderover>\n\
             <mrow>\n\
              <mfrac>\n\
               <mrow>\n\
                <msup>\n\
                 <mrow>\n\
                  <mo stretchy='false'>(</mo><mn>2</mn><mo>&#x22C5;</mo><mi>i</mi><mo stretchy='false'>)</mo></mrow>\n\
                 <mn>2</mn>\n\
                </msup>\n\
                </mrow>\n\
               <mrow>\n\
                <mn>2</mn><mo>&#x22C5;</mo><msup>\n\
                 <mi>i</mi>\n\
                 <mn>2</mn>\n\
                </msup>\n\
                </mrow>\n\
              </mfrac>\n\
              </mrow>\n\
            </mstyle>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",       
       correct_answer: '20'
    },
    {
        id: '3',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mrow>\n\
          <mi>cos</mi><mo stretchy='false'>(</mo><mn>2</mn><mi>&#x03C0;</mi><mo stretchy='false'>)</mo><mo>=</mo><mo>?</mo></mrow>\n\
        </semantics>\n\
       </math>\n\
       ",
       correct_answer: '1'
    },
    {
        id: '4',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mn>1111</mn>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>d</mi><mi>e</mi><mi>c</mi><mo stretchy='false'>(</mo><mi>x</mi><mo stretchy='false'>)</mo><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",
       correct_answer: '15'
    },
    {
        id: '5',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>0</mn><mo stretchy='false'>)</mo><mo>=</mo><mn>0</mn>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>7</mn><mo stretchy='false'>)</mo><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",
       correct_answer: '13'
    },
    {
        id: '6',
        html: "<p class='pt-2 pl-10'>\n\
        <b>Python</b><br>\n\
        a = 1000, b = 1000, x = 0<br>\n\
        if a is b:<br>\n\
        &nbsp;&nbsp;&nbsp;&nbsp;x = 16<br>\n\
        else:<br>\n\
        &nbsp;&nbsp;&nbsp;&nbsp;x = 18<br>\n\
        x == ?\n\
        </p>",
        correct_answer: '18'
    },
    {
        id: '7',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
             <mi>x</mi>\n\
            <mo>=</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mi>o</mi><mi>f</mi><mo stretchy='false'>(</mo><mi>c</mi><mi>h</mi><mi>a</mi><mi>r</mi><mo stretchy='false'>)</mo>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <msub>\n\
             <mi>x</mi>\n\
             <mrow>\n\
              <mi>b</mi><mi>i</mi><mi>t</mi></mrow>\n\
            </msub>\n\
            <mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",
       correct_answer: '8'
    },
    {
        id: '8',
        html: "<math display='block'>\n\
        <semantics>\n\
        <mtable columnalign='left'>\n\
        <mtr>\n\
            <mtd>\n\
            <msub>\n\
            <mi>log</mi>\n\
            <mi>x</mi>\n\
            </msub>\n\
            <mo stretchy='false'>(</mo><mn>256</mn><mo stretchy='false'>)</mo><mo>=</mo><mn>2</mn>\n\
            </mtd>\n\
        </mtr>\n\
        <mtr>\n\
            <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
            </mtd>\n\
        </mtr>\n\
        </mtable>\n\
        </semantics>\n\
        </math>",
        correct_answer: '16'
    },
    {
        id: '9',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
           <mi>h</mi><mi>e</mi><mi>x</mi><mo stretchy='false'>(</mo><mi>x</mi><mo stretchy='false'>)</mo><mo>=</mo><mn>1</mn><mi>E</mi><mo>&#x2212;</mo><mi>B</mi>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>d</mi><mi>e</mi><mi>c</mi><mo stretchy='false'>(</mo><mi>x</mi><mo stretchy='false'>)</mo><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",
       correct_answer: '19'
    },
    {
        id: '10',
        html: "<math display='block'>\n\
        <semantics>\n\
        <mtable columnalign='left'>\n\
        <mtr>\n\
            <mtd>\n\
            <mi>A</mi><mo>=</mo><mo stretchy='false'>(</mo><mn>2</mn><mo>&#x007C;</mo><mn>4</mn><mo>&#x007C;</mo><mn>1</mn><mo stretchy='false'>)</mo><mo>,</mo><mi>B</mi><mo>=</mo><mo stretchy='false'>(</mo><mn>4</mn><mo>&#x007C;</mo><mn>5</mn><mo>&#x007C;</mo><mn>3</mn><mo stretchy='false'>)</mo>\n\
            </mtd>\n\
        </mtr>\n\
        <mtr>\n\
            <mtd>\n\
            <mi>|</mi><mover accent='true'>\n\
            <mrow>\n\
            <mi>A</mi><mi>B</mi></mrow>\n\
            <mo stretchy='true'>&#x2192;</mo>\n\
            </mover>\n\
            <mi>|</mi><mo>=</mo><mo>?</mo>\n\
            </mtd>\n\
        </mtr>\n\
        </mtable>\n\
        </semantics>\n\
        </math>",      
        correct_answer: '3'
    },
    {
        id: '11',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mi>int</mi><mo stretchy='false'>(</mo><msub>\n\
             <mi>log</mi>\n\
             <mi>e</mi>\n\
            </msub>\n\
            <mo stretchy='false'>(</mo><mn>21</mn><mo stretchy='false'>)</mo><mo stretchy='false'>)</mo><mo>&#x22C5;</mo><mn>7</mn>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",
       correct_answer: '21'
    },
    {
        id: '12',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mover accent='true'>\n\
             <mi>a</mi>\n\
             <mo stretchy='true'>&#x2192;</mo>\n\
            </mover>\n\
            <mo>=</mo><mfenced>\n\
             <mtable columnalign='left'>\n\
              <mtr>\n\
               <mtd>\n\
                <mn>4</mn>\n\
               </mtd>\n\
              </mtr>\n\
              <mtr>\n\
               <mtd>\n\
                <mn>4</mn>\n\
               </mtd>\n\
              </mtr>\n\
              <mtr>\n\
               <mtd>\n\
                <mn>2</mn>\n\
               </mtd>\n\
              </mtr>\n\
             </mtable>\n\
            </mfenced>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>&#x007C;</mi><mover accent='true'>\n\
             <mi>a</mi>\n\
             <mo stretchy='true'>&#x2192;</mo>\n\
            </mover>\n\
            <mi>&#x007C;</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",   
       correct_answer: '6'
    },
    {
        id: '13',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>A</mi><mo>=</mo><mstyle displaystyle='true'>\n\
             <mrow><munderover>\n\
              <mo>&#x222B;</mo>\n\
              <mrow>\n\
               <mn>3</mn><mo>/</mo><mn>2</mn><mi>&#x03C0;</mi></mrow>\n\
              <mrow>\n\
               <mn>5</mn><mo>/</mo><mn>2</mn><mi>&#x03C0;</mi></mrow>\n\
             </munderover>\n\
             <mrow>\n\
              <mi>cos</mi><mo stretchy='false'>(</mo><mi>x</mi><mo stretchy='false'>)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mstyle displaystyle='true'>\n\
              <mi>&nbsp;</mi>\n\
              <mo>&#x007C;</mo><mrow><munderover>\n\
                <mo>&#x222B;</mo>\n\
                <mrow>\n\
               <mn>1</mn><mo>/</mo><mn>2</mn><mi>&#x03C0;</mi></mrow>\n\
                <mrow>\n\
                 <mn>3</mn><mo>/</mo><mn>2</mn><mi>&#x03C0;</mi></mrow>\n\
               </munderover>\n\
               <mrow>\n\
                <mi>cos</mi><mo stretchy='false'>(</mo><mi>x</mi><mo stretchy='false'>)</mo><mi>d</mi><mi>x</mi></mrow>\n\
              </mrow>\n\
             </mstyle><mo>&#x007C;</mo></mrow>\n\
           </mrow>\n\
          </mstyle>\n\
         </mtd>\n\
        </mtr>\n\
        <mtr>\n\
         <mtd>\n\
          <mi>A</mi><mo>=</mo><mo>?</mo>\n\
         </mtd>\n\
        </mtr>\n\
       </mtable>\n\
       </semantics>\n\
       </math>",       
       correct_answer: '4'
    },
    {
        id: '14',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>A</mi><mo>=</mo><mo>&#x007B;</mo><mn>2</mn><mo>;</mo><mn>14</mn><mo>;</mo><mn>5</mn><mo>;</mo><mn>13</mn><mo>;</mo><mn>22</mn><mo>&#x007D;</mo>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>B</mi><mo>=</mo><mo>&#x007B;</mo><mn>12</mn><mo>;</mo><mn>22</mn><mo>;</mo><mn>23</mn><mo>;</mo><mn>17</mn><mo>&#x007D;</mo>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>A</mi><mo>&#x2229;</mo><mi>B</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",       
       correct_answer: '22'
    },
    {
        id: '15',
        html: "<p class='pt-2 pl-10'>\n\
        x = 0<br>\n\
        while (true):<br>\n\
        &nbsp;&nbsp;&nbsp;&nbsp;if is_prime(x) && x > 6:<br>\n\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>\n\
        &nbsp;&nbsp;&nbsp;&nbsp;x++<br>\n\
        x == ?\n\
        </p>",
        correct_answer: '7'
    },
    {
        id: '16',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>&#x2208;</mo><mo>&#x007B;</mo><mn>1,2,...,24</mn><mo>&#x007D;</mo>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mfrac>\n\
             <mi>b</mi>\n\
             <mn>2</mn>\n\
            </mfrac>\n\
            <mo>=</mo><mi>c</mi><mo>&#x2227;</mo><mi>b</mi><mo>&#x2212;</mo><mn>6</mn><mo>=</mo><mi>a</mi><mo>&#x2227;</mo><mi>a</mi><mo>&#x2212;</mo><mn>4</mn><mo>=</mo><mi>c</mi>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>a</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",       
       correct_answer: '14'
    },
    {
        id: '17',
        html: '<p class="pt-2 pl-10">\n\
        char *str = "I love you";<br>\n\
        int i = 0;<br>\n\
        while (str[i]) {<br>\n\
        &nbsp;&nbsp;&nbsp;&nbsp;i++;<br>\n\
        }<br>\n\
        i == ?\n\
        </p>',
        correct_answer: '10'
    },
    {
        id: '18',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>M</mi><mo>=</mo><mo>&#x007B;</mo><mn>2,4,6,7,9,15,16,23</mn><mo>&#x007D;</mo>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mo>&#x2203;</mo><mi>x</mi><mo>&#x2208;</mo><mi>M</mi><mo>:</mo><mo>&#x2200;</mo><mi>g</mi><mo>&#x2208;</mo><mi>M</mi><mo>:</mo><mi>g</mi><mo>&#x2264;</mo><mi>x</mi>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",       
       correct_answer: '23'
    },
    {
        id: '19',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>i</mi><mi>s</mi><mo>&#x005F;</mo><mi>p</mi><mi>r</mi><mi>i</mi><mi>m</mi><mi>e</mi><mo stretchy='false'>(</mo><mi>x</mi><mo stretchy='false'>)</mo><mo>=</mo><mo>=</mo><mi>t</mi><mi>r</mi><mi>u</mi><mi>e</mi>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>i</mi><mi>s</mi><mo>&#x005F;</mo><mi>e</mi><mi>v</mi><mi>e</mi><mi>n</mi><mo stretchy='false'>(</mo><mi>x</mi><mo stretchy='false'>)</mo><mo>=</mo><mo>=</mo><mi>t</mi><mi>r</mi><mi>u</mi><mi>e</mi>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",
       correct_answer: '2'
    },
    {
        id: '20',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>&#x2248;</mo><mstyle displaystyle='true'>\n\
             <mrow><munderover>\n\
              <mo>&#x222B;</mo>\n\
              <mn>0</mn>\n\
              <mn>3</mn>\n\
             </munderover>\n\
             <mrow>\n\
              <msup>\n\
               <mi>e</mi>\n\
               <mi>x</mi>\n\
              </msup>\n\
              <mi>d</mi><mi>x</mi></mrow>\n\
            </mrow>\n\
           </mstyle><mo>&#x2212;</mo><mstyle displaystyle='true'>\n\
            <munderover>\n\
             <mo>&#x2211;</mo>\n\
             <mrow>\n\
              <mi>i</mi><mo>=</mo><mn>1</mn></mrow>\n\
             <mn>2</mn>\n\
            </munderover>\n\
            <mrow>\n\
             <mstyle displaystyle='true'>\n\
              <mrow><munderover>\n\
               <mo>&#x222B;</mo>\n\
               <mn>0</mn>\n\
               <mi>i</mi>\n\
              </munderover>\n\
              <mrow>\n\
               <msup>\n\
                <mi>e</mi>\n\
                <mi>x</mi>\n\
               </msup>\n\
               </mrow>\n\
             </mrow>\n\
            </mstyle></mrow>\n\
          </mstyle><mi>d</mi><mi>x</mi>\n\
         </mtd>\n\
        </mtr>\n\
        <mtr>\n\
         <mtd>\n\
          <mi>x</mi><mo>=</mo><mo>?</mo>\n\
         </mtd>\n\
        </mtr>\n\
       </mtable>\n\
       </semantics>\n\
       </math>",
       correct_answer: '11'
    },
    {
        id: '21',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mfrac>\n\
             <mrow>\n\
              <msup>\n\
               <mrow>\n\
                <mo stretchy='false'>(</mo><mi>x</mi><mo>+</mo><mo stretchy='false'>(</mo><mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>8</mn><mo stretchy='false'>)</mo><mo>+</mo><mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>3</mn><mo stretchy='false'>)</mo><mo stretchy='false'>)</mo><mo stretchy='false'>)</mo></mrow>\n\
               <mrow>\n\
                <mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>3</mn><mo stretchy='false'>)</mo></mrow>\n\
              </msup>\n\
              </mrow>\n\
             <mrow>\n\
              <mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>6</mn><mo stretchy='false'>)</mo></mrow>\n\
            </mfrac>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mo>&#x2212;</mo><mfrac>\n\
             <mrow>\n\
              <msup>\n\
               <mrow>\n\
                <mo stretchy='false'>(</mo><mo stretchy='false'>(</mo><mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>4</mn><mo stretchy='false'>)</mo><mo>&#x22C5;</mo><mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>5</mn><mo stretchy='false'>)</mo><mo stretchy='false'>)</mo><mo>+</mo><mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>5</mn><mo stretchy='false'>)</mo><mo stretchy='false'>)</mo></mrow>\n\
               <mrow>\n\
                <mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>3</mn><mo stretchy='false'>)</mo></mrow>\n\
              </msup>\n\
              <mo>&#x2212;</mo><mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>3</mn><mo stretchy='false'>)</mo><mo>&#x22C5;</mo><mi>x</mi></mrow>\n\
             <mrow>\n\
              <mi>f</mi><mi>i</mi><mi>b</mi><mo stretchy='false'>(</mo><mn>3</mn><mo stretchy='false'>)</mo></mrow>\n\
            </mfrac>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>\n\
       ",       
        correct_answer: '17'
    },
    {
        id: '22',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>y</mi><mo>=</mo><msqrt>\n\
             <mrow>\n\
              <mn>144</mn></mrow>\n\
            </msqrt>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>&#x007C;</mo><mi>y</mi><mo>&#x2227;</mo><mi>x</mi><mo>&#x003E;</mo><mn>6</mn>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",       
       correct_answer: '12'
    },
    {
        id: '23',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mtable columnalign='left'>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mroot>\n\
             <mrow>\n\
              <mn>125</mn></mrow>\n\
             <mn>3</mn>\n\
            </mroot>\n\
           </mtd>\n\
          </mtr>\n\
          <mtr>\n\
           <mtd>\n\
            <mi>x</mi><mo>=</mo><mo>?</mo>\n\
           </mtd>\n\
          </mtr>\n\
         </mtable>\n\
        </semantics>\n\
       </math>",
        correct_answer: '5'
    },
    {
        id: '24',
        html: "<math display='block'>\n\
        <semantics>\n\
         <mrow>\n\
          <msub>\n\
           <mrow>\n\
            <mi>log</mi></mrow>\n\
           <mn>2</mn>\n\
          </msub>\n\
          <mo stretchy='false'>(</mo><mn>512</mn><mo stretchy='false'>)</mo><mo>=</mo><mo>?</mo></mrow>\n\
        </semantics>\n\
       </math>",       
       correct_answer: '9'
    },
]

//import doors from "./doors";

function init()
{
    doors.forEach(door => {
        const grid = document.getElementById("grid");
        const final_page = document.createElement('div');
        const wrapper = document.createElement('div');
        const task_div = document.createElement('div');
        const link_div = document.createElement('div');
        const form = document.createElement('form');
        const inp = document.createElement('input');
        const btn = document.createElement('button');

        wrapper.classList.add("grid", "grid-rows-2", "bg-red-700","bg-opacity-75", "rounded-lg");
        wrapper.id = door.correct_answer;
        grid.append(wrapper);

        const box = document.getElementById(`${wrapper.id}`);
        task_div.innerHTML = door.html;
        box.append(task_div);
        form.classList.add("flex","flex-wrap", "gap-4", "place-self-end", "w-full", "p-6");
        form.id = "answer" + wrapper.id;
        box.append(form);

        const form_box = document.getElementById("answer" + `${wrapper.id}`);
        inp.classList.add("bg-white-400","bg-opacity-85", "rounded-lg", "border-2", "p-1", "text-black");
        btn.classList.add("bg-green-600","bg-opacity-85", "rounded-lg", "border-2", "p-1");
        inp.type = "text";
        inp.name = "answer"
        inp.placeholder = "Your Answer"
        btn.id = "submit" + wrapper.id;
        btn.type = "button";
        btn.innerHTML = "Answer"
        form_box.append(inp);
        form_box.append(btn);

        const btn_submit =  document.getElementById("submit" + `${wrapper.id}`);
        btn_submit.addEventListener('click', (e) => {
            let val = inp.value;
            const container = document.getElementById('container');
            if (val == door.correct_answer){
                final_page.classList.add("p-6", "bg-green-300", "rounded");
                final_page.innerHTML = "Your Answer Is Correct!";
                console.log("is correct");
            }else{
                final_page.classList.add("p-6", "bg-red-300", "rounded");
                final_page.innerHTML = "Your Answer Is Incorrect!";
                console.log("value is INCORRECT")
            }
            container.append(final_page);
            grid.classList.add("hidden");
        })
    });
}
document.addEventListener('DOMContentLoaded', init, false);