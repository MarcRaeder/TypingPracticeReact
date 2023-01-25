export class TextService {
  constructor(repository) {
    this.textRepository = repository;
  }

  async GenerateNewText(textLength) {
    console.log(this.textRepository);
    return await this.textRepository.GenerateNewText(textLength);
  }
}
