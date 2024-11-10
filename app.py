from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.preprocessing import image # type: ignore
import numpy as np
app = Flask(__name__)

# Load the pre-trained model
model = tf.keras.applications.ResNet50(weights='imagenet')

# Route to handle image prediction
@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    img = image.load_img(file, target_size=(224, 224))  # Resizing the image
    img_array = image.img_to_array(img)  # Convert image to array
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = tf.keras.applications.resnet50.preprocess_input(img_array)  # Preprocess the image
    
    # Get predictions
    preds = model.predict(img_array)
    decoded_preds = tf.keras.applications.resnet50.decode_predictions(preds, top=3)[0]
    
    # Return top 3 predictions
    result = [{"class": label, "confidence": float(prob)} for (_, label, prob) in decoded_preds]
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
