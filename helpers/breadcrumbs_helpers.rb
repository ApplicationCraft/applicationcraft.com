module BreadcrumbsHelpers

  def breadcrumbs
    excluded = ['/', '/developers/', '/developers/documentation/']
    page, crumbs = current_page, []

    while page = page.parent
      next if excluded.include? page.url

      crumbs << {
        :url => page.url,
        :title => page.data.title
      }
    end

    crumbs.reverse
  end

end