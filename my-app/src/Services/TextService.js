export class TextService {
  constructor(repository) {
    this.textRepository = repository;
  }

  async GenerateNewText(textLength) {
    return await this.textRepository.GenerateNewText(textLength);
  }
}
