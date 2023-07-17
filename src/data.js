import cnn_output_shape from '../src/images/cnn_output_shape.png';
import flops from '../src/images/flops.png';
import confusion_matrix from '../src/images/confusion_matrix.png'
import p_r_1 from '../src/images/Precisionrecall.png'
import example from '../src/images/example.png'
import p_r_result from '../src/images/precision_recall_result.png'
import dice from '../src/images/dice.png'

export const data = [
  {
    title: "Cross Validation",
    desc: (<>
    <u><b>Types of Cross Validation: </b></u><br></br> <br></br>
    <ul>
      <li>1. <b>Hold Out Cross Validation</b></li>
      <li>2. <b>k-Fold Cross Validation</b></li>
      <li>3. <b>Leave-one-out Cross Validation</b></li>
      <li>4. <b>Leave-p-out Cross Validation</b></li>
      <li>5. <b>Stratified k-Fold Cross Validation</b></li>
      <li>6. <b>Repeated k-Fold Cross Validation</b></li>
      <li>7. <b>Nested k-Fold</b></li>
    </ul> 
    <br></br>   
    </>),
  },
  {
    title: "Output shape after CNN operation",
    desc: (<>

    <img src={cnn_output_shape} alt="CNN output shape" width="200" height="150"></img>
    <br></br>
    n<sub>in</sub>: # of input features <br></br>
    n<sub>out</sub>: # of output features <br></br>
    k: kernel size <br></br>
    p: padding size <br></br>
    s: convolution stride <br></br>

    </>),
  },

  {
    title: "# of FLOPS in ML model",
    desc: (<>
    <img src={flops} alt="FLOPS" width="700" height="500"></img>
    <br></br>
    Each convolution operation will require the following number of mutiplications and additions: <br></br>
    # of mutiplications : 9 <br></br>
    # of additions: 9 <br></br>

    and we have to perform each convolution operation 9 times so the total number of FLOPS will be:<b> 18 * 9 = 162 FLOPS. </b>
    
    </>),
  },

  {
    title: "Confusion Matrix",
    desc: (<>
    <img src={confusion_matrix} alt="Confusion Matrix" width="400" height="400"></img><br></br>

    A confusion matrix is a table that is often used to evaluate the performance of a machine learning classification model. <br></br>
    We can say its a summary of the predictions made by the classification model compared to the actual labels of the dataset. <br></br>
    <br></br>
    <u><b>In the matrix: </b></u><br></br> <br></br>
    <ul>
      <li>1. <b>True Positive:</b> The model predicted a positive class, and it was actually positive.</li>
      <li>2. <b>False Negative:</b> The model predicted a negative class, but it was actually positive.</li>
      <li>3. <b>False Positive:</b> The model predicted a positive class, but it was actually negative.</li>
      <li>4. <b>True Negative:</b> The model predicted a negative class, and it was actually negative.</li>
    </ul> 
    <br></br>
    <b>False Positive</b> is also referred as <b>Type I</b> error. <br></br>
    <b>False Negative</b> is also known as <b>Type II</b> error. <br></br>

    </>),
  },

  {
    title: "Prediction Error",
    desc: (<>
  True Positive, False Positive, False Negative, True Negative are the prediction errors in any classification model.
    
    </>),
  },

  {
    title: "Precision and Recall",
    desc: (<>
  <img src={p_r_1} alt="Precision Recall" width="300" height="300"></img><br></br>
  <u><b>Precision</b></u> <br></br>
  Precision means out of all the predictions what fraction was actually correct. <br></br>
  <u><b>Recall</b></u> <br></br>
  Recall means out of all the ground truth(actual) labels what fraction was correctly predict.<br></br>
  <br></br>
    </>),
  },

  {
    title: "Precision, Recall, Accuracy Calculation",
    desc: (<>
    Let's consider the output of some classification model is as in table below. So, the precision, recall and accuracy can be calculated as:
    <br></br> <br></br>
  <img src={example} alt="Example" width="400" height="300"></img><br></br>
  <img src={p_r_result} alt="Precision Recall Result" width="400" height="400"></img><br></br>
    
    </>),
  },
  {
    title: "Evaluation metric for segmentation model",
    desc: (<>
    <img src={dice} alt="Precision Recall" width="400" height="300"></img><br></br>
    </>),
  },
  {
    title: "Epoch",
    desc: (<>One complete pass through the training data.</>),
  },
  {
    title: "Iteration",
    desc: (
    <>  Indicates the number of times the model parameters (weights and bias) are updated during training. <br></br>
    When training a neural network an iteration involves two passes: <br></br>
    1. Forward Pass- in this loss calculation is performed. <br></br>
    2. Backward Pass- also called as backpropagation, model parameters are updated based on loss and other 
    hyperparameters(learning rate, regularization).<br></br>
    </>),
  },
  {
    title : "Batch",
    desc: (<>
    The set of data used in one iteration.
    </>)
  },

  {
    title : "Batch Size",
    desc: (<>
    The number of training data samples in a batch is defined by batch size.
    </>)
  },
  {
    title: "Calculating number of iterations in one epoch",
    desc: (<>
    Suppose, 
    Total number of samples in training data: 1000 <br></br>
    Batch size = 20 <br></br>
    Then, one batch consist of 20 training samples. <br></br>
    Number of iterations in one epoch: 1000/20 = 100 iterations <br></br>
    After every iteration the model parameters will be updated.
    </>)
  },
  {
    title: "Learning Rate",
    desc: (<>
    Learning rate controls the adjustment of model parameters (weights and bias) in each iteration. It is used in backpropagation. 
    The learning rate is multiplied with the gradient in each iteration. This product is also known as gradient step. 
    Learning rate is denoted by the symbol α. <br></br>
    <br></br>
    <b>Articles:</b><br></br>
    <br></br>
    <a href="https://towardsdatascience.com/understanding-learning-rates-and-how-it-improves-performance-in-deep-learning-d0d4059c1c10">
    1. <u>Understanding Learning Rates and how it improves performance in deep learning</u>
    </a><br></br>
    <a href="https://www.jeremyjordan.me/nn-learning-rate/">
    2. <u>NN Learning Rate</u>
    </a><br></br>   
    <a href="https://cs231n.github.io/neural-networks-3/?ref=jeremyjordan.me#anneal">
    3. <u>Refer this for Loss Function and Annealing the learning rate</u>
    </a><br></br>  
    </>)
  },

  {
    title: "Training set, Validation set and Testing set",
    desc: (<>
    The dataset is divided into three sets:
    <br></br>
    1. Training set<br></br>
    2. Validation set<br></br>
    3. Testing set<br></br>
    <br></br>
    - Training set is used for training the machine learning model.<br></br>

    - Validation set is used for evaluating the trained machine learning model and performing hyperparameter tuning based on the evaluation.<br></br>

    - Testing set is the set which is used for testing machine learning models. Each sample of the dataset should belong to any one of the above set. Test loss is less biased and higher quality metric than training loss and validation loss.<br></br>
    </>)

  }


];
