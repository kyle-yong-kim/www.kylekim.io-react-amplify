// import MathJax from 'react-mathjax2'; // remove this package
import { Node, Context } from 'react-mathjax';
import algebra, { Expression } from 'algebra.js';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { podcastKeynote } from './podcastData';
import React from 'react';
import moment from 'moment';

function Formula(props) {
    return (
        <Context input="tex">
            <Node inline>{props.tex}</Node>
        </Context>
    );
}

var exp = new Expression("")

export function getModalTitleBar(modalName) {
    switch (modalName) {

        // for portfolio
        case "autoliv":
            return "Autoliv - Mechatronics Engineer Internship";
        case "FencingProject":
            return "Varsity Fencing";
        case "StockProject":
            return "Stock Project";
        case "MLProject":
            return "ML Project";
        case "Elzat Imam":
            return "Elzat Imam - Topic: Career in data analytics, and the importance of practical mindset in career soul searching";
        case "Vincent Mastromatteo":
            return "Vincent Mastromatteo - Topic: Highschool to university transition, and the Schulich experience";
        case "Mason Li":
            return "Mason Li - Topic: The Accenture consultant experience, and the importance of never ending learning";
        case "Heather Wang":
            return "Heather Wang - Topic: The Rotman Commerce experience, and making the best university experience";
        case "Jeremy Chiu":
            return "Jeremy Chiu - Topic: Double Degree, from Business to CS, and not letting your degree define who you are";
        default:
            return null;
    }
}

export function getModalHTML(modalName, setCurrentTime) {

    switch (modalName) {

        // for portfolio
        case "autoliv":
            return AutolivModal;
        case "FencingProject":
            return FencingModal;
        case "StockProject":
            return StockModal;
        case "MLProject":
            return MLModal;

        // default, so podcast
        default:
            return getPodcastModalHTML(modalName, setCurrentTime);
    }
}

export function timeStampToSeconds(timestamp) {
    const beginTimeStamp = timestamp.split("~")[0].trim();
    const beginTimeStampInSeconds = moment.duration(beginTimeStamp).asSeconds();
    return beginTimeStampInSeconds;
}

export function getBeginTimeToClassName(modalName) {
    
    if (podcastKeynote[modalName] !== undefined && podcastKeynote[modalName].keynote !== undefined) {
        let beginTimeToClassName = [];

        for (let i=0; i < podcastKeynote[modalName].keynote.length; i++) {

            // begin time stamp
            const beginTimeStampInSeconds = timeStampToSeconds(podcastKeynote[modalName].keynote[i].timestamp);
            beginTimeToClassName.push([beginTimeStampInSeconds, `${modalName}-${i}`]);
        }

        return beginTimeToClassName;
    }

    return null;
}

function getPodcastModalHTML(modalName, setCurrentTime) {
    if (podcastKeynote[modalName] !== undefined) { //modalName is unique key identifier, which is name in this case.
        
        return (
            <>

            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-left podcast-player-container">
                        {/* <h1 style={{borderBottom: "1px solid rgb(0,0,0)"}}>Summary</h1> */}
                        <h1 style={{fontWeight:"700"}}>Summary</h1>

                        {/* <div className="guest-summary-section" style={{padding: "15px", marginBottom: "20px"}}> */}
                        <div className="guest-summary-section" style={{marginBottom: "25px"}}>

                            {podcastKeynote[modalName].guestIntroduction.map(function (item, i) {
                                return (
                                    <>
                                    <h2 style={{fontFamily:"Montserrat", fontWeight:"700"}}>{item[0]}</h2>
                                    <p style={{fontFamily:"Lato", fontWeight:"300"}}>{item[1]}</p>
                                    </>
                                )
                            })}
                            
                        </div>
                        
                        {/* <h1 style={{borderBottom: "1px solid rgb(0,0,0)"}}>Keynote</h1> */}
                        <h1 style={{fontWeight:"700"}}>Keynote</h1>

                        {podcastKeynote[modalName].keynote.map(function (item, i) {
                            return (
                                <div className={`base-podcast-section ${modalName}-${i}`} onClick={() => setCurrentTime(timeStampToSeconds(item.timestamp))}>
                                <h2>{item.section}<span>{item.timestamp}</span></h2>

                                {/* okay, description is now a list  */}
                                {item.description.map(function (item_j,i) {
                                    return (
                                        <p style={(i+1!==item.description.length) ? {marginBottom: "1em"} : {} }>{item_j}</p>
                                    )
                                })
                                }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        
            </>
        )
    } 

    return null;
}

export const MLModal =

    <div className="container text-center">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2 className="portfolio-project-click-title">Machine Learning<br />News to Stock Prediction</h2>
                <div className="text-left">
                    <p className="portfolio-project-click-subtitle">Introduction</p>
                    <p>
                        This was a course project of APS360: Artificial Intelligence Fundamentals.
                        The class was divided into groups of three, where each group would then
                        choose a machine learning applicable project.
                </p>
                    <p>
                        As our group members were interested in NLP (Natural Language Processing) and finance,
                        we decided to utilize news article headlines to predict
                        whether a stock would increase or decrease for a corresponding timeframe.
                </p>
                    <p className="portfolio-project-click-subtitle">Project Presentation</p>
                    <p>
                        Below is our group's final presentation. Click <a href="https://www.youtube.com/watch?v=7oKdg4PlWIE">here</a> if the video doesn't work.
                <br />
                        <span style={{ backgroundColor: 'rgb(211, 247, 197)' }}>Highlighted timestamps</span> are my section within the presentation.
                </p>
                    <strong>Video time stamp:</strong>
                    <table>
                        <tbody><tr>
                            <th style={{ width: '320px' }}>Project Introduction</th>
                            <td>0:00 ~ 0:40</td>
                        </tr>
                            <tr>
                                <th>Value &amp; Limitation</th>
                                <td>0:40 ~ 1:35</td>
                            </tr>
                            <tr>
                                <th>Data Processing &amp; Cleaning</th>
                                <td>1:35 ~ 3:47</td>
                            </tr>
                            <tr style={{ backgroundColor: 'rgb(211, 247, 197)' }}>
                                <th>* Model Architecture</th>
                                <td>3:47 ~ 4:39</td>
                            </tr>
                            <tr style={{ backgroundColor: 'rgb(211, 247, 197)' }}>
                                <th>* Example Results</th>
                                <td>4:39 ~ 4:53</td>
                            </tr>
                            <tr>
                                <th>Results Discussion 1
                        <br />
                        Confusion Matrix
                    </th>
                                <td>4:53 ~ 6:02</td>
                            </tr>
                            <tr>
                                <th>Results Discussion 2
                        <br />
                        Baseline Accuracy
                    </th>
                                <td>6:02 ~ 6:55</td>
                            </tr>
                            <tr style={{ backgroundColor: 'rgb(211, 247, 197)' }}>
                                <th>* Results Discussion 3
                        <br />
                        Prediction Confidence
                    </th>
                                <td>6:55 ~ 7:14</td>
                            </tr>
                            <tr style={{ backgroundColor: 'rgb(211, 247, 197)' }}>
                                <th>* Takeaway</th>
                                <td>7:14 ~ 8:15</td>
                            </tr>
                        </tbody></table>
                    <div id="youtube-vid" className="iframe-container mb-3">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/7oKdg4PlWIE?controls=1&autoplay=0&mute=0&showinfo=0&modestbranding=0&loop=1&showsearch=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <p className="portfolio-project-click-subtitle">Project Overview</p>
                    <br />
                    <img className="img-fluid mb-2 portfolio-fit-85" src="img/portfolio/Overview.png" alt="" />
                    <p className="portfolio-project-click-subtitle">Neural Network Architecture</p>
                    <p style={{ marginBottom: 0, paddingBottom: 0 }}>Three things to be discussed...</p>
                    <ul>
                        <li>Transfer Learning, Word2Vec Embedding</li>
                        <li>Baseline Model</li>
                        <li>LSTM Model</li>
                    </ul>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Transfer Learning, Word2Vec Embedding</p>
                        <p>
                            The architecture utilizes transfer learning through Google's pretrained Word2Vec model.
                            Below figure is a visual representation of how Word2Vec model is employed for the purposes of this
                            project.
                </p>
                        <img className="img-fluid mb-2 portfolio-fit-word2vec" src="img/portfolio/word2vec_model.png" alt="" />
                        <p>
                            <br />
                        </p><p><strong>What is Transfer Learning?</strong>
                            <br />
                    Transfer learning is a common practice in machine learning strategies to increase model
                    performance.
                    Essentially, you are taking a portion of a pre-trained model, in this case, Google's News300
                    Word2Vec model,
                    and apply it to a target model.</p>
                        <p>
                            <strong>Why Transfer Learning?</strong>
                            <br />
                    The pre-trained model is specifically trained on news articles.
                    This way, the model can benefit from the marginal news data (100 billion words)
                    which the vectors were trained on.
                    <br />
                        </p>
                        <p>
                            <strong>What is Word2Vec?</strong>
                            <br />
                    As name indicates, it converts a word into a 1D numerical vector.
                    Below is an example of vectorizing a word "car".
                </p><p style={{ textAlign: 'center' }}>
                            v("car") = tensor([1.78, -3.21, -0.98, 2.40 ...])
                </p>
                        <p />
                        <p>
                            <strong>Why Word2Vec?</strong>
                            <br />
                    The vector is highly useful, as mathematical operations can be applied.
                    As an example, through the use of cosine similarity,
                    you can find words that are close to another word and so on.
                    The most notable example is the following Word2Vec operation;
                </p><p style={{ textAlign: 'center' }}>
                            v("King") - v("Man") + v("Woman") ~= v("Queen")
                </p>
                Essentially, by substituting masculinity with feminity from the word "King",
                you end up with a vector which closely resembles the word "Queen".
                <p />
                        <p />
                    </div>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Baseline Model</p>
                        <img className="img-fluid mb-2 portfolio-fit-models" src="img/portfolio/baseline_model.png" alt="" />
                        <p>Baseline model uses a BOW (bag of words) method to convert news headline into a size 300 vector.
                        The result is then fed through a two level deep neural network for final prediction.
                        [1, 0] and [0, 1] represent stock decrease and increase respectively.
                </p>
                    </div>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>LSTM Model</p>
                        <img className="img-fluid mb-2 portfolio-fit-models" src="img/portfolio/LSTM_model.png" alt="" />
                        <p>
                            LSTM (Long Short-Term Memory) model, as the name indicates, uses a LSTM variant of RNN (Recurrent
                            Neural Network).
                            Use of RNN is quite obvious. RNN performs better in sequential data analysis,
                            as its hidden state represents a cumulative result of all tokens observed.
                            Token in this case is a vector of size 300 which represents a word within a given news headline.
                </p>
                        <p>
                            LSTM is found to be the best performing model out of the three models; Valina RNN, RNN-GRU,
                            RNN-LSTM.
                            This is a logical behavior as LSTM is explicitly designed to
                            avoid the long-term dependency problem of valina RNN.
                </p>
                    </div>
                    <p className="portfolio-project-click-subtitle">Data Processing</p>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Data Mining Process</p>
                        <img className="img-fluid mb-2 portfolio-fit-100" src="img/portfolio/data_process.png" alt="" />
                    </div>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Data Split Method</p>
                        <img className="img-fluid mb-2 portfolio-fit-70" src="img/portfolio/data_split.png" alt="" />
                    </div>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Example Data</p>
                        <p>
                            Here's how an example data looks like.
                </p>
                        <img className="img-fluid mb-2 portfolio-fit-100" src="img/portfolio/json_data_example.png" alt="" />
                    </div>
                    <p className="portfolio-project-click-subtitle">Assumptions and Limitation</p>
                    <br />
                    <table>
                        <tbody><tr>
                            <th style={{ width: '120px' }}>Assumption</th>
                            <td>
                                <strong>Stock market reacts exactly one day after a news article publishment.</strong>
                                <br />
                        In reality, after a breakdown news, stock market can react within minutes or seconds.
                    </td>
                        </tr>
                            <tr>
                                <th style={{ width: '120px' }}>Limitation</th>
                                <td>
                                    <strong>Ignorance of a company's financial performance.</strong>
                                    <br />
                        There's many other factors aside from news articles which could impact stock performance.
                        However, due to project scoping and restricted financial data availability
                        (public values are only updated quarterly), these values were not considered.
                        This could hinder on normalization of the news to stock prediction, as we are simply not providing
                        enough information for the model to draw conclusion for general data.
                    </td>
                            </tr>
                        </tbody></table>
                    <p className="portfolio-project-click-subtitle">Results</p>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Training Curve (Train &amp; Validation Dataset)</p>
                        <img className="img-fluid mb-2 portfolio-fit-models" src="img/portfolio/training_curve.png" alt="" />
                        <p>
                            As expected, there's a clear overfitting visible from both architectures.
                            Note that the gap between training to validation curve for LSTM model is lower than of the baseline
                            model.
                            This indicate for a better generalization, as the model show closer trend curve between training and
                            validation data.
                </p>
                        <p>
                            Additionally, this gap is a potential outcome of limited input resource.
                            As mentioned earlier, the model is only given a news article headline to predict its company stock
                            performance.
                            Due to the limitation of data, the model is expected to experience some difficulty in stock
                            prediction generalization,
                            as news article is only a portion of stock price determining factors.
                </p>
                    </div>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Confusion Matrix (Test Dataset)</p>
                        <img className="img-fluid mb-2 portfolio-fit-models" src="img/portfolio/complexity_matrix.png" alt="" />
                        <p>
                            Confusion matrix is used to disect the overall accuracy into categories for close analysis.
                            Using confusion matrix, below table is obtained
                </p>
                        <img className="img-fluid mb-2 portfolio-fit-models" src="img/portfolio/confusion_table.png" alt="" />
                        <p>
                            As expected, the test accuracy were slightly lowered when compared to its validation counterpart.
                </p>
                    </div>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Confidence Interval</p>
                        <p>
                            Prediction confidence is another measurement which can guide your model,
                            as you can apply an output filter by its prediction confidence to further improve model's accuracy.
                </p>
                        <p>
                            Note that through this, some news articles with low confidence will be ignored,
                            thus this is an ideal method for cases where multiple news articles are published on the same date
                            (so that some data points can be ignored).
                </p>
                        <img className="img-fluid mb-2 portfolio-fit-overview" src="img/portfolio/high_confidence.png" alt="" />
                        <p>
                            It is found that LSTM model's prediction with confidence higher than 80%, its accuracy reaches 76%.
                            This is a significant increase from the baseline model of 68%, and pure guessing of 50% (since
                            binary prediction).
                </p>
                    </div>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', fontWeight: 700 }}>Example Output</p>
                        <img className="img-fluid mb-2 portfolio-fit-overview" src="img/portfolio/example_results.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

const input1 = `$$Sr = \sum_{'{'}i=0{'}'}^n(y_i-a_o-a_1xi^1 \cdots -a_mx_i^m)^2$$`;
export const StockModal =
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2 className="portfolio-project-click-title">Stock Trend Forecast Bot</h2>
                <div className="text-left">
                    <p className="portfolio-project-click-subtitle"> Introduction</p>
                    <p className="mb-4">
                        Programmed in Python, MATLAB, and IEX financial data API. This was a personal project of mine, where
                        I
                        utilized polynomial regression; least-square criterion, along with log-normal probability
                        distribution and
                        Monte-Carlo simlated risk analysis to
                        determine
            the future trend of stock. </p>
                    <p className="portfolio-project-click-subtitle"> Objective</p>
                    <p>
                        The overall goal of the program is to return a trend graph of best accuracy, along with the optimal
                        upcoming
            buy/sell datetime using the derivative of regression polynomial.</p>
                    <p>
                        Below is an example result; IBM NYSE stock price trend, best result obtained by 38th degree
                        approximation,
            using <InlineMath math="r^2" /> of <InlineMath math="\frac{S_t-S_r}{S_t}" />, least square criterion.</p>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px' }}> <strong>Example 1: Best Polynomial Regression Result</strong>
                        </p>
                        <span style={{ margin: 0, padding: 0 }}><strong>Obtained F(x)_best fit:</strong></span>
                        <p style={{ fontSize: '12px', color: 'rgb(71, 56, 158)' }}>F(X) = -2.6E-69X^38 + 4.5E-67X^37 + 9.0E-66X^36 +
                        -1.4E-63X^35
                        + -2.6E-61X^34 + -3.2E-59X^33 + 6.6E-57X^32 + -3.9E-55X^31 + 2.6E-53X^30 + 1.1E-51X^29
                        + -8.0E-49X^28 + 1.0E-46X^27 + -2.1E-45X^26 + -6.0E-46X^25 + -4.7E-41X^24 + -6.5E-42X^23
                        + 8.6E-37X^22 + -7.7E-35X^21 + -2.8E-33X^20 + 2.7E-31X^19 + 4.7E-29X^18 + 2.8E-27X^17
                        + -7.3E-25X^16 + -1.1E-25X^15 + 5.5E-21X^14 + -9.9E-19X^13 + 7.5E-17X^12 + 1.5E-15X^11
                        + -2.0E-13X^10 + -2.9E-11X^9 + 1.5E-9X^8 + 2.4E-7X^7 + -2.8E-5X^6 + 1.4E-3X^5 + -3.6E-2X^4
            + 6.0E-1X^3 + -6.6E+0X^2 + 4.4E+1X^1 + 3.0E-154X^0</p>
                        <span style={{ margin: 0, padding: 0 }}><strong>Graph:</strong></span>
                        <img className="img-fluid mt-3 mb-3" src="img/portfolio/ibm1.jpg" alt="" />
                        <div style={{ fontSize: '13px', marginBottom: '20px' }}>
                            <p style={{ color: 'rgb(170,0,0)', margin: 0, padding: 0 }}>* red data-point: actual data,</p> <span>
                                (obtained through JSON parsed IEX API data.)</span>
                            <p style={{ color: 'rgb(0,0,200)', margin: 0, padding: 0 }}>- blue curve:
                            polynomial
                            regression graph
                result</p>
                        </div>
                    </div>
                    {/* <MathJax.Context input='ascii'> */}
                    <div style={{ margin: '1.5em 0em 1em 0em', border: 'black solid 1px' }}>
                        <p style={{ margin: 0, padding: '0px 0px 0px 4px', backgroundColor: 'rgb(220,220,220)' }}>
                            Least Square Criterion Used:</p>

                        <div style={{ backgroundColor: 'rgb(245,245,245)', margin: 0, padding: 0 }}>
                            {/* <MathJax.Node inline>{input1}</MathJax.Node> */}
                            <BlockMath math="Sr = \sum_{i=0}^n(y_i-a_o-a_1xi^1 \cdots -a_mx_i^m)^2" />
                            <BlockMath math="St=\sum_{i=0}^n(y_i-\bar y)^2" />
                            <div className="test"><BlockMath className="math-margin-hack" math="r^2=\frac{S_t-S_r}{S_t}" /></div>
                            <p style={{ textAlign: 'center', margin: 0, padding: 0, paddingBottom: '10px' }}>Where <InlineMath math="m" /> is degree of
                    approximated polynomial, <InlineMath math="n" /> is number of data
                    sets
                </p>
                        </div>
                    </div>
                    {/* </MathJax.Context> */}
                    <p>It is important to note the value of <InlineMath math="r^2" />, since it directly implies how well the data set
            correlates
            to
            the obtained
            function. Higher degree does not always return higher accuracy, thus <InlineMath math="r^2" /> needs to be placed to
            ensure
            and
            prevent such case from happening.
        </p>
                    <p>Below is another example, where polynomial approximation of degree 41,
                    ends
            up with a lower correlation value than degree 38 approximation.</p>
                    <div className="stock-border">
                        <p style={{ fontSize: '20px' }}> <strong>Example 2: Worst Polynomial Regression
                Result</strong>
                        </p>
                        <img className="img-fluid mb-2" src="img/portfolio/ibm2.jpg" alt="" />
                        <span style={{ margin: 0, padding: 0 }}><strong>Key Note:</strong></span>
                        <p>Above graph
                        is a good example of overfitting by higher
                        degree polynomial regression.
                        Each dataset possesses distinct trend, and over-complicated polynomial
            would eventually result in a less accurate approximation. <InlineMath math="r^2" />; Coefficient of determination
            plays a key role within the program, where it filters out data and returns
            the most accurate forecast among other simulations.
            </p>
                    </div>
                    <p className="portfolio-project-click-subtitle">Program Logic</p>
                    <br />
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', margin: 0, padding: 0 }}><strong>Derivative Method:</strong></p>
                        <p>Using the derivative of the obtained function, the program predicts the upcoming expected datetime
                        of
                        maximum and minimum stock value. Newton-Raphson approximation method was utilized, as it has the
            highest convergence rate, given the formula of function <InlineMath math="f(x)" />.
            </p>
                        <img className="img-fluid mb-2" src="img/portfolio/derivative.jpg" alt="" />
                    </div>
                    <br />
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', margin: 0, padding: 0 }}><strong>Log-normal Distribution:</strong></p>
                        <p>As well, the descrete probability distribution is translated to log-normal properties (through
                        scipy)
                        to better
                        suit the data tendency of stocks; "skewed probability towards negative expected ROI". This allows
                        the bot to filter out risky data, while achieving optimal return for stocks with high success
                        probability.
            </p>
                        <p>The distribution is utilized to validate the stock price obtained by the derivative method.
                        If the data trend suggests for a very low probability of occurrence, the program will discard such
                        option in avoidance of potential value loss.
            </p>
                        <img className="img-fluid mb-3" src="img/portfolio/pdf.png" alt="" />
                    </div>
                    <br />
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', margin: 0, padding: 0 }}><strong>Monte-Carlo Simulation:</strong></p>
                        <p>Finally, Monte-Carlo simulation is used to model the future random movements of the stock price.
                        Using volatility, calculated through obtaining standard deviation from the log-normal distributed
                        stock prices,
                        100 simulations are ran within a span of 42 days, or 2 months of stock exchange openings.
            </p>
                        <p>
                            It visualizes and informs the potential best and worst results to the bot, as a filter for high-risk
                            investment.
                            The dense area suggests for higher probability of stock price residing within that specific range.
                            Higher volatility will create a bigger divergence, up to +- 40% from its last available closing
                            price.
            </p>
                        <img className="img-fluid mb-2" src="img/portfolio/monte-carlo.png" alt="" />
                        <p style={{ margin: 0, padding: 0 }}><strong>Key Note:</strong></p>
                        <p>
                            *Note that at day 0, all simulations start with the last closing price available from the IEX api.
                            As x axis furthers the distance,
                            the stock price diverges away from the origin price.
            </p>
                    </div>
                    <br />
                    <div className="stock-border">
                        <p style={{ fontSize: '20px', margin: 0, padding: 0 }}><strong>Logic Flow:</strong></p>
                        <img className="img-fluid mb-4" src="img/portfolio/ibm3.png" alt="" />
                        <img className="img-fluid mb-4" src="img/portfolio/ibm4.png" alt="" />
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>

export const FencingModal =

    <div className="container text-center">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2 className="portfolio-project-click-title">Varsity Fencing</h2>
                <div className="text-left">
                    <p className="portfolio-project-click-subtitle"> Competition Results</p>
                    <ul>
                        <li> OFA (Ontario Fencing Association) registered fencer</li>
                        <li> 2017 NM Challenge, 20th place individual ranking</li>
                        <li> 2018 RMC Invitational, 1st place team ranking</li>
                        <li> 2019 OUA Men's Open, University Champion</li>
                    </ul>
                    <p className="portfolio-project-click-subtitle"> What is Fencing?</p>
                    <p className="mb-3">
                        Let's begin with a video. Below is my favorite sabre fencer, Jung-Hwan Kim, from South Korea.</p>
                    <p style={{ fontSize: '13px', margin: 0 }}>*Disclaimer: I do not own the video, all the rights belong to
                        Syney Sabre Media.</p>
                    <div id="youtube-vid" className="iframe-container mb-3">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/vwFy3FIYkbc?controls=0&autoplay=1&mute=1&showinfo=0&modestbranding=0&loop=1&showsearch=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <p />
                    <p> Fencing is often referred as "physical chess". The reason being,
                    you are constantly challenged to utilize different tactics against your opponents,
                    while simulataneously requiring physical strength to backup your actions.
                    </p>
                    <p> Of the three weapon disciplines, I compete with Sabre; the only type that allows for both piercing
                        and cutting actions.</p>
                    <p>*Fun fact: The speed at the tip of a sabre blade is known to be the 2nd fastest olympic sports
                    material, aside from rifle shooting bullet.
                    </p>
                    <p className="portfolio-project-click-subtitle"> What I learnt from Varsity participation</p>
                    <p>
                        Being part of the varsity has taught a lot -
                        Working in a dynamic team, pursuing a common goal of success, and improving to become the
                        very best state of myself through rigorous practices.
                    </p>
                    <p>
                        This exceptional experience allowed me to become a constructive team player, not only on the
                        fencing piste, but also in my career as a developer.
                    </p>
                </div>
            </div>
        </div>
    </div>

export const AutolivModal =

    <div className="container text-center">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2 className="portfolio-project-click-title">Mechatronics Engineer Intern</h2>
                <div className="text-left">
                    <p className="portfolio-project-click-subtitle"> Introduction</p>
                    <p>
                        Autoliv is world's largest manufacturer in automotive electronics saftey systems,
                        with heavy focus towards Advanced Driving Assistance Systems (ADAS) and Automated Driving (AD).</p>
                    <p>
                        During my internship, I've acquired
                        professional developer knowledge through internal software creation and web-services
                        deployment.
                    </p>
                    <p>
                        As a software developer intern, I tackled many problems within backend APIs, data management,
                        as well as big-data analysis &amp; visualtion to identify bottlenecks.</p>
                    <p>Additionally, I
                    led a major quality reaction program, where I utilized probability and statistical knowledge
                    to pin point the origin timestamp of problem occurrence.
                    </p>
                    <p className="portfolio-project-click-subtitle">C#, .NET MVC, Web-Service API</p>
                    <ul className="mb-4">
                        <li>
                            Built / published an ASP.NET MVC based web-service API, SQL data structure, along with backend
                            C# data handler script to automatically update client data; Eliminated unnecessary workload by 40%
                        </li>
                        <li>Developed in C#, a visual plantwide data map using production status web API calls with JSON data
                        parsing</li>
                    </ul>
                    <p className="portfolio-project-click-subtitle">UX/UI</p>
                    <ul className="mb-4">
                        <li>
                            Performed GUI updates and reconstructed internal software through multi-threading; Improved
                            response
                        time by 20%</li>
                    </ul>
                    <p className="portfolio-project-click-subtitle">R, Python, SQL, Data Analysis</p>
                    <ul className="mb-4">
                        <li>Using structured sampling method, with discrete normal distribution, I correctly identified the
                        start point
                        of a major quality problem, which helped the company to save $20,000 through statistically
                        differentiating between
                        affected non-affected products.
                        </li><li>Developed a SQL process history verification program, successfully reduced module failure rate by
                        50%.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>