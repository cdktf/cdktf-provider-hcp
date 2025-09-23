# `dataHcpVaultSecretsDynamicSecret` Submodule <a name="`dataHcpVaultSecretsDynamicSecret` Submodule" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultSecretsDynamicSecret <a name="DataHcpVaultSecretsDynamicSecret" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer"></a>

```typescript
import { dataHcpVaultSecretsDynamicSecret } from '@cdktf/provider-hcp'

new dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret(scope: Construct, id: string, config: DataHcpVaultSecretsDynamicSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig">DataHcpVaultSecretsDynamicSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig">DataHcpVaultSecretsDynamicSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpVaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct"></a>

```typescript
import { dataHcpVaultSecretsDynamicSecret } from '@cdktf/provider-hcp'

dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement"></a>

```typescript
import { dataHcpVaultSecretsDynamicSecret } from '@cdktf/provider-hcp'

dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource"></a>

```typescript
import { dataHcpVaultSecretsDynamicSecret } from '@cdktf/provider-hcp'

dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport"></a>

```typescript
import { dataHcpVaultSecretsDynamicSecret } from '@cdktf/provider-hcp'

dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataHcpVaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpVaultSecretsDynamicSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpVaultSecretsDynamicSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_dynamic_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpVaultSecretsDynamicSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretProvider">secretProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretValues">secretValues</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appNameInput">appNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secretProvider`<sup>Required</sup> <a name="secretProvider" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretProvider"></a>

```typescript
public readonly secretProvider: string;
```

- *Type:* string

---

##### `secretValues`<sup>Required</sup> <a name="secretValues" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretValues"></a>

```typescript
public readonly secretValues: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appNameInput"></a>

```typescript
public readonly appNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultSecretsDynamicSecretConfig <a name="DataHcpVaultSecretsDynamicSecretConfig" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.Initializer"></a>

```typescript
import { dataHcpVaultSecretsDynamicSecret } from '@cdktf/provider-hcp'

const dataHcpVaultSecretsDynamicSecretConfig: dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.appName">appName</a></code> | <code>string</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.secretName">secretName</a></code> | <code>string</code> | The name of the Vault Secrets secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_dynamic_secret#app_name DataHcpVaultSecretsDynamicSecret#app_name}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-hcp.dataHcpVaultSecretsDynamicSecret.DataHcpVaultSecretsDynamicSecretConfig.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

The name of the Vault Secrets secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_dynamic_secret#secret_name DataHcpVaultSecretsDynamicSecret#secret_name}

---



