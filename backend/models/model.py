from abc import ABC, abstractmethod
from typing import List
import os


class Model(ABC):
    """
    Base class used for creating recommendation model.

    :params MODEL_PATH, str: folder where the model contains.
    """

    def __init__(self, model_path):
        self._model = None
        self._local_model_path = os.path.join(self.LOCAL_MODEL_PATH, model_path)

    @abstractmethod
    def train(self, *args, **kwargs):
        raise NotImplementedError()

    @abstractmethod
    def predict(self, *args, **kwargs) -> List:
        raise NotImplementedError()

    @abstractmethod
    def load(self):
        raise NotImplementedError()

    @abstractmethod
    def save(self):
        raise NotImplementedError()
