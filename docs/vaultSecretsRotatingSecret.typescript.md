# `vaultSecretsRotatingSecret` Submodule <a name="`vaultSecretsRotatingSecret` Submodule" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsRotatingSecret <a name="VaultSecretsRotatingSecret" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

new vaultSecretsRotatingSecret.VaultSecretsRotatingSecret(scope: Construct, id: string, config: VaultSecretsRotatingSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig">VaultSecretsRotatingSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig">VaultSecretsRotatingSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys">putAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putConfluentServiceAccount">putConfluentServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey">putGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser">putMongodbAtlasUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey">putTwilioApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys">resetAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetConfluentServiceAccount">resetConfluentServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey">resetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser">resetMongodbAtlasUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey">resetTwilioApiKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsAccessKeys` <a name="putAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys"></a>

```typescript
public putAwsAccessKeys(value: VaultSecretsRotatingSecretAwsAccessKeys): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

---

##### `putConfluentServiceAccount` <a name="putConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putConfluentServiceAccount"></a>

```typescript
public putConfluentServiceAccount(value: VaultSecretsRotatingSecretConfluentServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putConfluentServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a>

---

##### `putGcpServiceAccountKey` <a name="putGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey"></a>

```typescript
public putGcpServiceAccountKey(value: VaultSecretsRotatingSecretGcpServiceAccountKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

---

##### `putMongodbAtlasUser` <a name="putMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser"></a>

```typescript
public putMongodbAtlasUser(value: VaultSecretsRotatingSecretMongodbAtlasUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

---

##### `putTwilioApiKey` <a name="putTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey"></a>

```typescript
public putTwilioApiKey(value: VaultSecretsRotatingSecretTwilioApiKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

---

##### `resetAwsAccessKeys` <a name="resetAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys"></a>

```typescript
public resetAwsAccessKeys(): void
```

##### `resetConfluentServiceAccount` <a name="resetConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetConfluentServiceAccount"></a>

```typescript
public resetConfluentServiceAccount(): void
```

##### `resetGcpServiceAccountKey` <a name="resetGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey"></a>

```typescript
public resetGcpServiceAccountKey(): void
```

##### `resetMongodbAtlasUser` <a name="resetMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser"></a>

```typescript
public resetMongodbAtlasUser(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTwilioApiKey` <a name="resetTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey"></a>

```typescript
public resetTwilioApiKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsRotatingSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsRotatingSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsRotatingSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys">awsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccount">confluentServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference">VaultSecretsRotatingSecretConfluentServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser">mongodbAtlasUser</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey">twilioApiKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput">appNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput">awsAccessKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccountInput">confluentServiceAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput">gcpServiceAccountKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput">integrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput">mongodbAtlasUserInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput">rotationPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput">secretProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput">twilioApiKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName">integrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName">rotationPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider">secretProvider</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccessKeys`<sup>Required</sup> <a name="awsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys"></a>

```typescript
public readonly awsAccessKeys: VaultSecretsRotatingSecretAwsAccessKeysOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a>

---

##### `confluentServiceAccount`<sup>Required</sup> <a name="confluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccount"></a>

```typescript
public readonly confluentServiceAccount: VaultSecretsRotatingSecretConfluentServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference">VaultSecretsRotatingSecretConfluentServiceAccountOutputReference</a>

---

##### `gcpServiceAccountKey`<sup>Required</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey"></a>

```typescript
public readonly gcpServiceAccountKey: VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a>

---

##### `mongodbAtlasUser`<sup>Required</sup> <a name="mongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser"></a>

```typescript
public readonly mongodbAtlasUser: VaultSecretsRotatingSecretMongodbAtlasUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `twilioApiKey`<sup>Required</sup> <a name="twilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey"></a>

```typescript
public readonly twilioApiKey: VaultSecretsRotatingSecretTwilioApiKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a>

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput"></a>

```typescript
public readonly appNameInput: string;
```

- *Type:* string

---

##### `awsAccessKeysInput`<sup>Optional</sup> <a name="awsAccessKeysInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput"></a>

```typescript
public readonly awsAccessKeysInput: IResolvable | VaultSecretsRotatingSecretAwsAccessKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

---

##### `confluentServiceAccountInput`<sup>Optional</sup> <a name="confluentServiceAccountInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.confluentServiceAccountInput"></a>

```typescript
public readonly confluentServiceAccountInput: IResolvable | VaultSecretsRotatingSecretConfluentServiceAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a>

---

##### `gcpServiceAccountKeyInput`<sup>Optional</sup> <a name="gcpServiceAccountKeyInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput"></a>

```typescript
public readonly gcpServiceAccountKeyInput: IResolvable | VaultSecretsRotatingSecretGcpServiceAccountKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput"></a>

```typescript
public readonly integrationNameInput: string;
```

- *Type:* string

---

##### `mongodbAtlasUserInput`<sup>Optional</sup> <a name="mongodbAtlasUserInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput"></a>

```typescript
public readonly mongodbAtlasUserInput: IResolvable | VaultSecretsRotatingSecretMongodbAtlasUser;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `rotationPolicyNameInput`<sup>Optional</sup> <a name="rotationPolicyNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput"></a>

```typescript
public readonly rotationPolicyNameInput: string;
```

- *Type:* string

---

##### `secretProviderInput`<sup>Optional</sup> <a name="secretProviderInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput"></a>

```typescript
public readonly secretProviderInput: string;
```

- *Type:* string

---

##### `twilioApiKeyInput`<sup>Optional</sup> <a name="twilioApiKeyInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput"></a>

```typescript
public readonly twilioApiKeyInput: IResolvable | VaultSecretsRotatingSecretTwilioApiKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `rotationPolicyName`<sup>Required</sup> <a name="rotationPolicyName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName"></a>

```typescript
public readonly rotationPolicyName: string;
```

- *Type:* string

---

##### `secretProvider`<sup>Required</sup> <a name="secretProvider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider"></a>

```typescript
public readonly secretProvider: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsRotatingSecretAwsAccessKeys <a name="VaultSecretsRotatingSecretAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

const vaultSecretsRotatingSecretAwsAccessKeys: vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername">iamUsername</a></code> | <code>string</code> | AWS IAM username to rotate the access keys for. |

---

##### `iamUsername`<sup>Required</sup> <a name="iamUsername" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername"></a>

```typescript
public readonly iamUsername: string;
```

- *Type:* string

AWS IAM username to rotate the access keys for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#iam_username VaultSecretsRotatingSecret#iam_username}

---

### VaultSecretsRotatingSecretConfig <a name="VaultSecretsRotatingSecretConfig" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

const vaultSecretsRotatingSecretConfig: vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName">appName</a></code> | <code>string</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName">integrationName</a></code> | <code>string</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name">name</a></code> | <code>string</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName">rotationPolicyName</a></code> | <code>string</code> | Name of the rotation policy that governs the rotation of the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider">secretProvider</a></code> | <code>string</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys">awsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a></code> | AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.confluentServiceAccount">confluentServiceAccount</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a></code> | Confluent configuration to manage the cloud api key rotation for the given service account. Required if `secret_provider` is `confluent`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a></code> | GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser">mongodbAtlasUser</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a></code> | MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId">projectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey">twilioApiKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a></code> | Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#app_name VaultSecretsRotatingSecret#app_name}

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#integration_name VaultSecretsRotatingSecret#integration_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#name VaultSecretsRotatingSecret#name}

---

##### `rotationPolicyName`<sup>Required</sup> <a name="rotationPolicyName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName"></a>

```typescript
public readonly rotationPolicyName: string;
```

- *Type:* string

Name of the rotation policy that governs the rotation of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#rotation_policy_name VaultSecretsRotatingSecret#rotation_policy_name}

---

##### `secretProvider`<sup>Required</sup> <a name="secretProvider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider"></a>

```typescript
public readonly secretProvider: string;
```

- *Type:* string

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#secret_provider VaultSecretsRotatingSecret#secret_provider}

---

##### `awsAccessKeys`<sup>Optional</sup> <a name="awsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys"></a>

```typescript
public readonly awsAccessKeys: VaultSecretsRotatingSecretAwsAccessKeys;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#aws_access_keys VaultSecretsRotatingSecret#aws_access_keys}

---

##### `confluentServiceAccount`<sup>Optional</sup> <a name="confluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.confluentServiceAccount"></a>

```typescript
public readonly confluentServiceAccount: VaultSecretsRotatingSecretConfluentServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a>

Confluent configuration to manage the cloud api key rotation for the given service account. Required if `secret_provider` is `confluent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#confluent_service_account VaultSecretsRotatingSecret#confluent_service_account}

---

##### `gcpServiceAccountKey`<sup>Optional</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey"></a>

```typescript
public readonly gcpServiceAccountKey: VaultSecretsRotatingSecretGcpServiceAccountKey;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#gcp_service_account_key VaultSecretsRotatingSecret#gcp_service_account_key}

---

##### `mongodbAtlasUser`<sup>Optional</sup> <a name="mongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser"></a>

```typescript
public readonly mongodbAtlasUser: VaultSecretsRotatingSecretMongodbAtlasUser;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#mongodb_atlas_user VaultSecretsRotatingSecret#mongodb_atlas_user}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `twilioApiKey`<sup>Optional</sup> <a name="twilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey"></a>

```typescript
public readonly twilioApiKey: VaultSecretsRotatingSecretTwilioApiKey;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#twilio_api_key VaultSecretsRotatingSecret#twilio_api_key}

---

### VaultSecretsRotatingSecretConfluentServiceAccount <a name="VaultSecretsRotatingSecretConfluentServiceAccount" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

const vaultSecretsRotatingSecretConfluentServiceAccount: vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | Confluent service account to rotate the cloud api key for. |

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

Confluent service account to rotate the cloud api key for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#service_account_id VaultSecretsRotatingSecret#service_account_id}

---

### VaultSecretsRotatingSecretGcpServiceAccountKey <a name="VaultSecretsRotatingSecretGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

const vaultSecretsRotatingSecretGcpServiceAccountKey: vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | GCP service account email to impersonate. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

GCP service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#service_account_email VaultSecretsRotatingSecret#service_account_email}

---

### VaultSecretsRotatingSecretMongodbAtlasUser <a name="VaultSecretsRotatingSecretMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

const vaultSecretsRotatingSecretMongodbAtlasUser: vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName">databaseName</a></code> | <code>string</code> | MongoDB Atlas database or cluster name to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId">projectId</a></code> | <code>string</code> | MongoDB Atlas project ID to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles">roles</a></code> | <code>string[]</code> | MongoDB Atlas roles to assign to the rotating user. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

MongoDB Atlas database or cluster name to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#database_name VaultSecretsRotatingSecret#database_name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

MongoDB Atlas project ID to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

MongoDB Atlas roles to assign to the rotating user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_secrets_rotating_secret#roles VaultSecretsRotatingSecret#roles}

---

### VaultSecretsRotatingSecretTwilioApiKey <a name="VaultSecretsRotatingSecretTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

const vaultSecretsRotatingSecretTwilioApiKey: vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsRotatingSecretAwsAccessKeysOutputReference <a name="VaultSecretsRotatingSecretAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

new vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput">iamUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername">iamUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamUsernameInput`<sup>Optional</sup> <a name="iamUsernameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput"></a>

```typescript
public readonly iamUsernameInput: string;
```

- *Type:* string

---

##### `iamUsername`<sup>Required</sup> <a name="iamUsername" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername"></a>

```typescript
public readonly iamUsername: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsRotatingSecretAwsAccessKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

---


### VaultSecretsRotatingSecretConfluentServiceAccountOutputReference <a name="VaultSecretsRotatingSecretConfluentServiceAccountOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

new vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsRotatingSecretConfluentServiceAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfluentServiceAccount">VaultSecretsRotatingSecretConfluentServiceAccount</a>

---


### VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference <a name="VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

new vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsRotatingSecretGcpServiceAccountKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

---


### VaultSecretsRotatingSecretMongodbAtlasUserOutputReference <a name="VaultSecretsRotatingSecretMongodbAtlasUserOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

new vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsRotatingSecretMongodbAtlasUser;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

---


### VaultSecretsRotatingSecretTwilioApiKeyOutputReference <a name="VaultSecretsRotatingSecretTwilioApiKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer"></a>

```typescript
import { vaultSecretsRotatingSecret } from '@cdktf/provider-hcp'

new vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsRotatingSecretTwilioApiKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

---



