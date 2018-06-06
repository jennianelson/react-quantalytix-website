class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  config.generators do |g|
    g.test_framework false
    g.stylesheets false
    g.helpers false
  end
end
