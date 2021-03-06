module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
        passthroughtFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir:{
            input:"src",
            output:"_site",
            includes:"_includes"
        }
    }
}
