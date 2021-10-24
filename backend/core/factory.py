from backend.core.models.model import Model
from backend.core.models.item_similarity import ItemSimilarity
from backend.core.models.random import Random


class ModelFactory:
    """ Factory to create correct model for given name.
    In additional, class save trained/loaded models.

    :params model_name str: name to implement existing model.
    """
    current_models = {}
    model_name_to_class = {
        'rnn': None,
        'item_similarity': ItemSimilarity,
        'collaborative_filtering': None,
        'random': Random,
    }

    @classmethod
    def reload_model(cls, model_name):
        if model_name in cls.current_models:
            cls.current_models[model_name] = cls.model_name_to_class[model_name]()

    @classmethod
    def create(cls, model_name, database) -> Model:
        if model_name not in cls.model_name_to_class:
            raise ValueError('This model: {}, is not supported'.format(model_name))

        if model_name not in cls.current_models:
            cls.current_models[model_name] = cls.model_name_to_class[model_name](database)

        return cls.current_models[model_name]
