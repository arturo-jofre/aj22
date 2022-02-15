module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addPassthroughCopy('assets')
    return {
        passthroughtFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir:{
            input:"src",
            output:"_site",
            includes:"includes"
        }
    }
}